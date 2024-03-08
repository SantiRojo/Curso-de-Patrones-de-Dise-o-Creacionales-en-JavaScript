/*
* Cómo implementar Singleton?

* 1. Hacer privado al constructor
* 2. Crear un método estático que llame al constructor privado y guarde la instancia en una variable estática

*/

class Singleton {
  static instance = undefined;

  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }

    return Singleton.instance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance('version-1');
  const singleton2 = Singleton.getInstance('version-2');
  const singleton3 = Singleton.getInstance('version-3');

  console.log(singleton1 === singleton2);
  console.log(singleton1 === singleton3);
}

appSingleton();