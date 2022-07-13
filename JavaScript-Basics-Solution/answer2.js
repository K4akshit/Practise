class MetadataParser{
    #version;
    #channel;
    #keyField;

    get getVersion(){
        return this.#version;
    }

    set setVersion(ver){
        this.#version = ver;
    }

    get getChannel(){
        return this.#channel;
    }

    set setChannel(ch){
        this.#channel = ch;
    }

    get getKeyField(){
        const objArr = this.#keyField;
        let arr = objArr.map((v) => v.channel);
        return arr; 
    }

    set setKeyField(kf){
        this.#keyField = kf;
    }

    //reduce function r = accumulator , a = current value;
    groupObjectsBy(ex,key){
       var res = ex.reduce(function (r,a){
            r[a[key]] = r[a[key]] || [];
            r[a[key]].push(a);
           // console.log(ob);
           return r;
        },Object.create(null));
        return res;
    }
    
}

/* [{
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
]
*/

const pp = new MetadataParser();

pp.setKeyField = [{channel:'A'}, {channel:'B'}, {channel:'C'}];

console.log(pp.getKeyField);

let ex = [
    {
      channel: 'A',
      name: 'shoe'
    },
    {
      channel: 'A',
      name: 'electronics'
    },
    {
      channel: 'B',
      name: 'apparel'
    },
    {
      channel: 'C',
      name: 'electronics'
    }
  ];

console.log(pp.groupObjectsBy(ex,'channel'));




