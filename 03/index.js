// first test

const car = {
    name: "opel",
    capacity: 110,
    volume: 1.6,
    country: "Germany"
};


for (let key in car) {
    console.log(key + " : " + car[key]);
}

// second test

const user = {
    name: "Artem",
    email: "art@mail.ru",
    phone: "9376117777",
    id: "art611",
};

const newUser = user;


// third test

const circle = {
    radius: 6,
    color: "red",
    calculateCircumference: function () {
        console.log(2 * 3.14 * this.radius)
    }
};


// fourth test

const message = {
    getMessage: function (string) {
        this.text = string;
    },
    showMessage: function () {
        console.log(this.text);
    },

};


// fifth test

const rectangle = {
    height: 10,
    width: 20,
    getArea: function () {
        return this.height * this.width;
    },

};

// sixth test

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};


// seventh test

const selfGeneratedUser = {
    getInfo: function () {
        let name = prompt('name');
        let email = prompt('email');
        let phone = prompt('phone');
        this.name = name;
        this.email = email;
        this.phone = phone;
    },
    introduce: function () {
        for (let key in selfGeneratedUser){
            alert(key);
        }
    }
};

selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();