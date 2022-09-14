import ProductIdDoNotExists from '../errors/products/productIdDoNotExists';
import { IWalmart } from '../models/interfaces/mapperInterface';
import { IVerifyCSV, IProduct, IProductResponse, IProductResponseCSV, IQuery } from '../models/interfaces/productInterface';
import productRepository from '../repositories/productRepository';

class ProductService {
  async create (payload: IProduct): Promise<IProductResponse> {
    if (payload.qtd_stock <= 0) { payload.stock_control_enabled = false; }
    payload.stock_control_enabled = true;
    const result = await productRepository.create(payload);
    return result;
  }

  async createByCSV (csv: String): Promise<IProductResponseCSV> {
    const csvList = csv.split('\n').map((row) => row.replace(/"/gi, '').replace(/\r/gi, '').split(','));
    csvList.shift();
    return await this.insertByCSV(csvList);
  }

  async insertByCSV (csv: String[][]): Promise<IProductResponseCSV> {
    const insertCSV: IProduct[] = [];
    const result: IProductResponseCSV = {
      success: 0,
      errors: 0
    };

    for await (const element of csv) {
      const newProduct: IProduct = {
        title: element[0] || '',
        description: element[1] || '',
        department: element[2] || '',
        brand: element[3] || '',
        price: Number(element[4]) || 0,
        qtd_stock: Number(element[5]) || 0,
        stock_control_enabled: true,
        bar_code: element[6] || ''
      };

      const verify: IVerifyCSV = await this.verifyProductCSV(newProduct);

      if (verify.verify === true) {
        insertCSV.push(newProduct);
        result.success = Number(result.success) + 1;
      } else {
        result.errors = Number(result.errors) + 1;
        result.error_details === undefined
          ? result.error_details = [{
            title: newProduct.title,
            bar_code: newProduct.bar_code,
            error: verify.messages
          }]
          : result.error_details?.push({
            title: newProduct.title,
            bar_code: newProduct.bar_code,
            error: verify.messages
          });
      }
    };
    await productRepository.createByCSV(insertCSV);
    return result;
  }

  async verifyProductCSV (csv: IProduct): Promise<IVerifyCSV> {
    const verified: IVerifyCSV = {
      verify: true
    };
    if (!csv.title) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['title is null']
        : verified.messages.push('title is null');
    }
    if (!csv.department) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['description is null']
        : verified.messages.push('description is null');
    }
    if (!csv.department) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['department is null']
        : verified.messages.push('department is null');
    }
    if (!csv.brand) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['brand is null']
        : verified.messages.push('brand is null');
    }
    if (!csv.price) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['price is null']
        : verified.messages.push('price is null');
    }
    if (!csv.qtd_stock) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['qtd_stock is null']
        : verified.messages.push('qtd_stock is null');
    }
    if (csv.bar_code < '13' || csv.bar_code > '13') {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['bar_code min digit is 13']
        : verified.messages.push('bar_code min digit is 13');
    }
    if (csv.price < 0.01) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['price is lower than 0.01']
        : verified.messages.push('price is lower than 0.01');
    }
    if (csv.price > 1000) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['price is higher than 0.01']
        : verified.messages.push('price is higher than 0.01');
    }
    if (csv.qtd_stock < 1) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['qtd_stock is lower than 1']
        : verified.messages.push('qtd_stock is lower than 1');
    }
    if (csv.qtd_stock > 100000) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['qtd_stock is lower than 1']
        : verified.messages.push('qtd_stock is higher than 100000');
    }
    if (await this.findByBarCode(csv.bar_code)) {
      verified.verify = false; verified.messages === undefined
        ? verified.messages = ['bar_code duplicated']
        : verified.messages.push('bar_code duplicated');
    }

    return verified;
  }

  async findAll (query: IQuery): Promise<any> {
    return await productRepository.findAll(query);
  }

  async findById (id: String): Promise<IProductResponse | null> {
    const result = await productRepository.findById(id);
    if (result === null) throw new ProductIdDoNotExists();
    return result;
  }

  async findByLowStock (): Promise<any> {
    return await productRepository.findByLowStock();
  }

  async findByBarCode (barcode: String): Promise<Boolean> {
    return await productRepository.findByBarCode(barcode);
  }

  async delete (id: String): Promise<IProductResponse | null> {
    const result = await productRepository.delete(id);
    if (result === null) throw new ProductIdDoNotExists();
    return result;
  }

  async update (id: String, payload: IProduct): Promise<IProductResponse | null> {
    payload.qtd_stock === 0
      ? payload.stock_control_enabled = false
      : payload.stock_control_enabled = true;
    const result = await productRepository.update(id, payload);
    if (result === null) throw new ProductIdDoNotExists();
    return result;
  }

  async findByMapper (id: string): Promise<IWalmart | null> {
    const product = await productRepository.findById(id);
    if (product === null) throw new ProductIdDoNotExists();
    if (!product) throw new ProductIdDoNotExists();

    const list = 'R$ ' + product.price.toString();
    const code = product.bar_code.split('', 13);

    const walmartResponse: IWalmart = {
      id: product._id,
      product: {
        category: {
          path: {
            name: [product.department]
          }
        }
      },
      salesPrice: product.price,
      listPrice: list,
      codes: code
    };
    return walmartResponse;
  }
}

export default new ProductService();
