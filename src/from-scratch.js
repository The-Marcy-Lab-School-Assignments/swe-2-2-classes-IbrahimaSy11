class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width; 
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return (2 * this.length) + (2 * this.width);
  }

  isSquare() {
    return this.width === this.length;
  }
}

class Vehicle {
  passengers = [];

  constructor(type, capacity, color = 'black') {
    this.type = type;
    this.capacity = capacity;
    this.color = color;
  }

  paint(color) {
    this.color = color;
    return this.color;
  }

  addPassenger(passenger) {
    if (this.passengers.length >= this.capacity) {
      return -1;
    }
    this.passengers.push(passenger);
    return this.passengers.length;
  }
}


class PasswordManager {
  #secret;

  constructor(password) {
    this.#secret = password;
  }

  checkPassword(attempt) {
    return this.#secret === attempt;
  }

  setPassword(oldPassword, newPassword) {
    if (this.#secret !== oldPassword) {
      return false;
    }
    this.#secret = newPassword;
    return true;
  }
}

class TodoList {
  // Renamed private storage
  #todos = [];

  constructor(title) {
    this.title = title;
  }

  getItems() {
    return [...this.#todos];
  }

  addItem(description) {
    this.#todos.push(description);
    return this.#todos.length;
  }

  removeItem(description) {
    const index = this.#todos.indexOf(description);
    if (index === -1) return null;
    const [removed] = this.#todos.splice(index, 1);
    return removed;
  }
}

class BankAccount {
  static allAccounts = [];
  static #totalHoldings = 0;

  #accountBalance;

  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#accountBalance = balance;

    BankAccount.#totalHoldings += balance;
    BankAccount.allAccounts.push(this);
  }

  showBalance() {
    return `Your balance is $${this.#accountBalance.toFixed(2)}`;
  }

  deposit(amount) {
    this.#accountBalance += amount;
    BankAccount.#totalHoldings += amount;
    return `Your balance is $${this.#accountBalance.toFixed(2)}`;
  }

  withdraw(amount) {
    if (amount > this.#accountBalance) {
      return 'You do not have enough funds.';
    }
    this.#accountBalance -= amount;
    BankAccount.#totalHoldings -= amount;
    return `Your balance is $${this.#accountBalance.toFixed(2)}.`;
  }

  static getTotalHoldings() {
    return Number(BankAccount.#totalHoldings.toFixed(2));
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
