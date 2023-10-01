class Product {
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}
class StoreProduct {
    constructor() { /* Hàm khỏi taoj */
        this.products = [];
    }
    add(product) { /* Hàm thêm sản phẩm */
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id === product.id) {
                return false
            }
        }
        this.products.push(product)
        return true
    }
    update(product) { /* Hàm cập nhật sản phẩm */
        let vt = -1;
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id === product.id) {
                vt = i;
            }
        }
        //c1 
        if (vt !== -1) {
            // this.products[vt] = product;
            // remove product
            this.products.splice(vt, 1, product)
                // this.products.push(product)
            return true
        }
        return false
    }
    getById(id) { /* Hàm lấy sản phẩm theo id */
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id == id) {
                return currentProduct
            }
        }
        //c1 
        return null
    }
    remove(id) { /* Hàm xóa sản phẩm */
        console.log(this.products)
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id == id) {
                this.products.splice(i, 1)
                return true
            }
        }
        return false
    }
    save() { /* Hàm lưu dữ liệu vào localStorage */
        if (this.products.length > 0) {
            const data = JSON.stringify(this.products)
            localStorage.setItem('products', data)
        }
    }
    getData() { /*`Hàm lấy dữ liệu từ localStorage */
        const data = JSON.parse(localStorage.getItem('products'))
        if (data) {
            const listProduct = []
            for (let i = 0; i < data.length; i++) {
                const user = new Product(data[i].id, data[i].name, data[i].price, data[i].description, data[i].image)
                listProduct.push(user)
            }
            this.products = listProduct
        }
    }

    getProduct() { /* Hàm lấy danh sách sản phẩm */
        return this.products
    }
}

store = new StoreProduct(); // khởi tạo store

store.getData() // lấy dữ liệu từ localStorage

// them san pham 
function renderTable(products) {
    let content = ''
    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        content += `
    <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td><td>
        <img src="${item.image}" width="300px"/></td>
        <td>
            <button type="button" class="btn btn-primary" onclick="Mua()" >Mua</button>
        </td>
    </tr>
    `
    }
    document.getElementById('tableBody').innerHTML = content
}
renderTable(store.getProduct()) // hiển thị danh sách sản phẩm

function Mua() {
    alert('Bạn đã mua sản phẩm thành công !')
}