
function home(){
    document.querySelector('#display').innerHTML = `<div style="color:blue">THIS IS HOME PAGE :)</div>`
}

function addForm(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const form = document.createElement('form')
    form.innerHTML = `
                <div id="login">
                <p>LOGIN PAGE _ </p>
                <label>User Name</label>
                <input id="name" type="text" required>
                <label>Password</label>
                <input id="password" type="text" required>
                <button>SUBMIT</button>
                <button onclick="reset()">RESET</button>
                </div>
    `;
    block.appendChild(form)
    block.style.display = 'block'
}

function reset(){
    document.querySelector('#name').innerHTML=""
    document.querySelector('#password').innerHTML=""
}

function addRegistration(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const form = document.createElement('form')
    form.innerHTML = `
        <div id="registration">
          <div style="display: flex;">
            <div>
                <label for="name">Name</label>
                <input type="text" id="Rname"  required>
        
                <label for="email">Email</label>
                <input type="email" id="email" required>
        
                <label for="password">Password</label>
                <input type="password" id="Rpassword"  required>
        
                <label for="sex">Sex</label>
                <select id="sex" name="sex" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
    
            <div style="margin-left: 40px;">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" required>
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required>
        
                <label for="languages">Languages Known</label>
                <div style="display: flex;">
                    <label for="english">english</label>
                <input type="checkbox"  id="english">
                </div>


                <div style="display: flex;">
                    <label for="hindi">hindi</label>
                <input type="checkbox"  id="hindi">
                </div>
        
                <label for="address">Address</label>
                <textarea id="address" name="address" rows="4" required></textarea>
            </div>
          </div>

            <button onclick="validate()" type="submit">Register</button>
        </div>
    `
    block.appendChild(form)
    block.style.display = 'block'

}

function containsOnlyAlphabetsAndSpaces(str) {
    return /^[A-Za-z\s]+$/.test(str);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validate(){
    const Rname = document.querySelector('#Rname').value
    if(Rname.length <6){
        alert("name should contain more than 6 letters") 
    }else if(containsOnlyAlphabetsAndSpaces(Rname)==false){
        alert("name should contain only letters and spaces")     
    }

    const Rpass = document.querySelector('#Rpassword').value
    if(Rpassword.length <6){
        alert("password should contain more than 6 characters") 
    }
    
    const mail = document.querySelector('#email').value
    if(validateEmail(mail)==false){
        alert("email should follow abc@gmail.com format")
    }
    
}


function catalogue(){
    document.getElementById('display').innerHTML = `<div style="color:red">PLEASE SELECT BRANCH</div>`
}


function addCse(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const table = document.createElement('table')
    table.innerHTML = `
         <div id="bookContainer">
            <table>
            <tr>
                <th>book</th>
                <th>description</th>
                <th>price</th>
                <th>add to cart</th>
            </tr>
            <tr>
                <td style="background-image: url(https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-7107-0); background-size: contain; background-repeat: no-repeat; height: 45px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$20</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
            <tr>
                <td style="background-image: url(https://rukminim2.flixcart.com/image/850/1000/ki6bgcw0-0/book/y/i/h/data-structures-second-year-s-e-degree-course-in-computer-original-imafyf9f2mfegyvm.jpeg?q=20&crop=false); background-size: contain; background-repeat: no-repeat; height: 38px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$19</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
            <tr>
                <td style="background-image: url(https://m.media-amazon.com/images/I/518cD6CLLZL._AC_UF1000,1000_QL80_.jpg); background-size: contain; background-repeat: no-repeat; height: 46px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$8</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
        </table>
    </div>
    `
    block.appendChild(table)
    block.style.display= 'block'
}
function addEce(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const table = document.createElement('table')
    table.innerHTML = `
         <div id="bookContainer">
            <table>
            <tr>
                <th>book</th>
                <th>description</th>
                <th>price</th>
                <th>add to cart</th>
            </tr>
            <tr>
                <td style="background-image: url(https://m.media-amazon.com/images/I/61uwy2W+WuL._AC_UF1000,1000_QL80_.jpg); background-size: contain; background-repeat: no-repeat; height: 45px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$4</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
            <tr>
                <td style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDicHKSCKYfEkjwn4nZIP1_GcAkxkyE_t8_g&s); background-size: contain; background-repeat: no-repeat; height: 38px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$19</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
           
        </table>
    </div>
    `
    block.appendChild(table)
    block.style.display= 'block'
}
function addEee(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const table = document.createElement('table')
    table.innerHTML = `
         <div id="bookContainer">
            <table>
            <tr>
                <th>book</th>
                <th>description</th>
                <th>price</th>
                <th>add to cart</th>
            </tr>
            <tr>
                <td style="background-image: url(https://cdn.kobo.com/book-images/340613ef-d508-4a50-bbf5-dbaf7a5f9e76/353/569/90/False/electrical-engineering-3.jpg); background-size: contain; background-repeat: no-repeat; height: 45px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$12</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
            <tr>
                <td style="background-image: url(https://padhegaindia.in/wp-content/uploads/2024/08/9789356818835-1.webp); background-size: contain; background-repeat: no-repeat; height: 38px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$17</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
            <tr>
                <td style="background-image: url(https://www.aceengineeringpublications.com/wp-content/uploads/2024/07/449x612-EE_Bits-bytes-volume-1.jpg); background-size: contain; background-repeat: no-repeat; height: 46px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$6</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
        </table>
    </div>
    `
    block.appendChild(table)
    block.style.display= 'block'
}
function addCivil(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const table = document.createElement('table')
    table.innerHTML = `
         <div id="bookContainer">
            <table>
            <tr>
                <th>book</th>
                <th>description</th>
                <th>price</th>
                <th>add to cart</th>
            </tr>
            <tr>
                <td style="background-image: url(https://m.media-amazon.com/images/I/41yhiGjykLL._SY1000_.jpg); background-size: contain; background-repeat: no-repeat; height: 45px; background-position: center;"></td>
                <td></td>
                <td style="color:blue">$4</td>
                <td><button>add</button><p>total added : <p>0</p></p></td>
            </tr>
           
        </table>
    </div>
    `
    block.appendChild(table)
    block.style.display= 'block'
}

// cart..................................
let productList =[]
const initApp = () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data =>{
        productList = data
        // console.log(productList);
        addDataToHtml()
        
    })
}
initApp()

const addDataToHtml = ()=> {
    
}


function showCart(){
    document.querySelector('#display').innerHTML = ``
    const block = document.querySelector('#display')
    const content = document.createElement('table')
    content.innerHTML = `<div id="cartItem">
                          <tr>
                             <th>book name</th>
                             <th>price</th>
                             <th>quantity</th>
                             <th>amount</th>
                         </tr>
                         </div>
                         
                         `

    block.appendChild(content)
    block.style.display= 'block'
}