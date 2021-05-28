// Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu
// V = ⁴⁄₃πr³.

// const theTichHinhCau = (r) => {
//     let pi = Math.PI
//     return ( 4 / 3 * pi * Math.pow(r , 3))
// }
// theTichHinhCau()


// Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng

// const tongSoNguyen = (a, b) => {
//     let sum = 0
//     while ( ++a < b) {
//         sum += a
//     }
//     return sum
// }
// tongSoNguyen()

// Kiểm tra xem 1 số có phải là số nguyên tố hay không?

// const soNguyenTo = (input) => {
//     if ( input < 2 ) {
//         return false
//     }
//     for( let i = 2; i < input ; i++ ) {
//         if (input % i === 0 || input % input != 0 ) {
//             return false
//         } 
//     }
//     return true

// }
// soNguyenTo()


// Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó

// const tongCacUocSo = (input) => {
//     if (input < 1 ) {
//         return false
//     }
//     let sum = 0 
//     for ( let i = 1 ; i <= input ; i++) {
//         if (input % i === 0) {
//             sum += i
//         }
//     }
//     return sum 
// }
// tongCacUocSo()




let user = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]


// In thông tin ra table, tự chọn thông tin >>>>>>> Name 

const printName = (user) => {
    const btnEx1 = document.querySelector('.ex1')
    const boxEx1 = document.querySelector('.ex1-box')
    btnEx1.addEventListener('click', () => {
        let result = ''
        user.map(item => {
            return result += `<p>${item.name}</p>`
        })
        boxEx1.innerHTML = `${result}`
        // console.log(result.join(`<h1>${result.name}</h1>`))

    })
}
printName(user)


// Sắp xếp tên theo thứ tự bảng chữ cái và ngược lại
// Theo chiều A >> B >> C thì nhập (a,b) ngược lại nhập (b,a)
// const sapXep = user.sort((a,b) => {
//     var nameA = a.name.toUpperCase()
//     var nameB = b.name.toUpperCase()
//     if (nameA < nameB) {
//         return -1;
//       }
//     if (nameA > nameB) {
//         return 1;
//       }
//       return 0;
// })

// Làm chức năng tìm kiếm theo tên
const findName = (user) => {

const input = document.querySelector('#input')
const btn = document.querySelector('#btn').addEventListener('click', e => {
    let replaceInput = input.value
    let newInput = replaceInput.toLowerCase()
    user.map((item) => {
        if (item.name.toLowerCase() == newInput) 
        return document.querySelector('div').innerHTML = 
        `<table border="1px" style="margin-top : 20px" cellpadding="5px">
            <tr>
                <td style="font-weight : bold ">Name : ${item.name}</td>
            </tr>
            <tr>
                <td>UserName : ${item.username}</td>
            </tr>
            <tr>
                <td>Email : ${item.email}</td>
            </tr>
            <tr>
                <td>Phone : ${item.phone}</td>
            </tr>
            <tr>
                <td>Website : ${item.website}</td>
            </tr>

        </table>
        `
    })
})
}
findName (user)




const input = (user) => {
    let pages = []
    let count = 0
    for (let i = 0; i < user.length / 2; i++){
        pages[i] = {item : []}
    }
           
    user.map(item => {
        if (pages[count].item.length == 2) {
            count += 1
        }
        if (pages[count].item.length < 2) {
            pages[count].item.push(item)
        } 
    })
    
    const btn1 = document.querySelector('.ex2 .btn:first-child')
    const btn2 = document.querySelector('.ex2 .btn:nth-child(2)')
    const btn3 = document.querySelector('.ex2 .btn:nth-child(3)')
    const btn4 = document.querySelector('.ex2 .btn:nth-child(4)')
    const btn5 = document.querySelector('.ex2 .btn:nth-child(5)')
    const div = document.querySelector('.ex2 div')

    btn1.addEventListener('click', e => {
        div.innerHTML = `
        <div>
            <p style="font-weight:bold">${pages[0].item[0].name}</p>
            <p>${pages[0].item[0].username}</p>
            <p>${pages[0].item[0].email}</p>
            <p>${pages[0].item[0].phone}</p>
            <p>${pages[0].item[0].website}</p>
        </div>
        <div>
            <p style="font-weight:bold">${pages[0].item[1].name}</p>
            <p>${pages[0].item[1].username}</p>
            <p>${pages[0].item[1].email}</p>
            <p>${pages[0].item[1].phone}</p>
            <p>${pages[0].item[1].website}</p>
        </div>
       `
    })
    btn2.addEventListener('click', e => {
        div.innerHTML = `
        <div>
            <p style="font-weight:bold">${pages[1].item[0].name}</p>
            <p>${pages[1].item[0].username}</p>
            <p>${pages[1].item[0].email}</p>
            <p>${pages[1].item[0].phone}</p>
            <p>${pages[1].item[0].website}</p>
        </div>
        <div>
            <p style="font-weight:bold">${pages[1].item[1].name}</p>
            <p>${pages[1].item[1].username}</p>
            <p>${pages[1].item[1].email}</p>
            <p>${pages[1].item[1].phone}</p>
            <p>${pages[1].item[1].website}</p>
        </div>
       `
    })
    btn3.addEventListener('click', e => {
        div.innerHTML = `
        <div>
            <p style="font-weight:bold">${pages[2].item[0].name}</p>
            <p>${pages[2].item[0].username}</p>
            <p>${pages[2].item[0].email}</p>
            <p>${pages[2].item[0].phone}</p>
            <p>${pages[2].item[0].website}</p>
        </div>
        <div>
            <p style="font-weight:bold">${pages[2].item[1].name}</p>
            <p>${pages[2].item[1].username}</p>
            <p>${pages[2].item[1].email}</p>
            <p>${pages[2].item[1].phone}</p>
            <p>${pages[2].item[1].website}</p>
        </div>
       `
    })
    btn4.addEventListener('click', e => {
        div.innerHTML = `
        <div>
            <p style="font-weight:bold">${pages[3].item[0].name}</p>
            <p>${pages[3].item[0].username}</p>
            <p>${pages[3].item[0].email}</p>
            <p>${pages[3].item[0].phone}</p>
            <p>${pages[3].item[0].website}</p>
        </div>
        <div>
            <p style="font-weight:bold">${pages[3].item[1].name}</p>
            <p>${pages[3].item[1].username}</p>
            <p>${pages[3].item[1].email}</p>
            <p>${pages[3].item[1].phone}</p>
            <p>${pages[3].item[1].website}</p>
        </div>
       `
    })
    btn5.addEventListener('click', e => {
        div.innerHTML = `
        <div>
            <p style="font-weight:bold">${pages[4].item[0].name}</p>
            <p>${pages[4].item[0].username}</p>
            <p>${pages[4].item[0].email}</p>
            <p>${pages[4].item[0].phone}</p>
            <p>${pages[4].item[0].website}</p>
        </div>
        <div>
            <p style="font-weight:bold">${pages[4].item[1].name}</p>
            <p>${pages[4].item[1].username}</p>
            <p>${pages[4].item[1].email}</p>
            <p>${pages[4].item[1].phone}</p>
            <p>${pages[4].item[1].website}</p>
        </div>
       `
    })
    
    return pages
}
input(user)
// console.log(input(user))


