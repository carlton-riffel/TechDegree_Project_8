let employees;

function createNode(element)
{
  return document.createElement(element);
}

function append(parent,el)
{
  return parent.appendChild(el);
}

const ul = document.getElementById("employees");
const url = 'https://randomuser.me/api/?nat=us&results=12';

//maps employees from the list
function createCard(employees) {
  employees.map(function(employee){
  let li = createNode('li'),
  div1 = createNode('div'),
  div2 = createNode('div'),
  img = createNode('img'),
  name = createNode('h2'),
  email = createNode('p'),
  city = createNode('p'),
  phone = createNode('p'),
  address = createNode('p'),
  birthday = createNode('p');
  li.className = "box";
  //get image
  img.src=employee.picture.medium;
  //get name
  name.innerHTML=`${employee.name.first.charAt(0).toUpperCase()}${employee.name.first.slice(1)}
  ${employee.name.last.charAt(0).toUpperCase()}${employee.name.last.slice(1)}`;
  name.classList.add("name");
  //get email
  email.innerHTML=`${employee.email}`;
  email.classList.add("email");
  //get city
  city.innerHTML=`${employee.location.city.charAt(0).toUpperCase()}${employee.location.city.slice(1)},
  ${employee.location.state.charAt(0).toUpperCase()}${employee.location.state.slice(1)}`;
  city.classList.add("city");
  //get phone
  phone.innerHTML=`${employee.phone}`;
  phone.classList.add("phone");
  //get address
  phone.innerHTML=`Phone: ${employee.address}`;
  phone.classList.add("phone");
  //get birthday

  append(li,img);
  append(li,div1);
  append(li,div2);
  append(div1,name);
  append(div1,email);
  append(div1,city);
  append(div2,phone);
  append(div2,address);
  append(div2,birthday);
  append(ul,li);

})
}

//modal variables
var close = document.getElementById('close');
var modal = document.getElementById('modalPopup');

// Modal window texts
const profileImg = document.getElementById('profileImg');
const name = document.getElementById('name');
const city = document.getElementById('city');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const fullLocation = document.getElementById('location');
const dob = document.getElementById('dob');
const user = document.getElementById('username');

function clickEmployees(employees) {
  let cells = document.querySelectorAll('.box');
  cells.forEach(element => {
      element.addEventListener('click', modalPopup);
  });
}

function modalPopup(employees) {
  employees.map(function(employee){
let modalHTML = `
          <img src="${employee.picture.medium}" alt="${employee.name.first}">
          <h2 class="modalName">${employee.name.first.charAt(0).toUpperCase()}${employee.name.first.slice(1)}
          ${employee.name.last.charAt(0).toUpperCase()}${employee.name.last.slice(1)}</h2>
      </div>
      `
    });
  modal.innerHTML = modalHTML;
  modal.style.display = "block";
}
modal.style.display = "none";


fetch(url)
.then((resp) => resp.json())
.then(function(data){
  employees = data.results;
  return createCard(employees)
})
.then(employees => clickEmployees(employees))
.catch(function(error){
  console.log(JSON.stringify(error))
});
