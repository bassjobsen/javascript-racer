module.exports = {
  name: 'times',
  alias: 't',
  fields: [
     {
      name: 'id',
      type: 'BigInt',
      not_null: true,
      unique: true,
      primary_key: true
    },   
    {
      name: 'transactionId',
      type: 'String',
      length: 64,
      not_null: true,
      unique: true
    },    
    {
      name: 'time',
      type: 'Number',
      not_null: true
    },
    {
      name: 'lapTimes',
      type: 'String',
      length: 256,
      not_null: true
    },
    {
      name: 'racerId',
      type: 'String',
      length: 50,
      not_null: true
    },
    {
      name: 'version',
      type: 'String',
      length: 50,
      not_null: true
    },	
    {
      name: 'timestamp',
      type: 'Number',
      not_null: true
    }
  ]
}
