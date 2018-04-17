/* sample CRUD Service */

'use strict'

class CRUDService {

  /**
   * GET LIST RECORD WITH WHERE IN
   * @param {*} model 
   * @param {*} key 
   * @param {*} array_data 
   */
  static async getListWhereIn(model,key ,array_data = []){
    const Model = use(model);
    return await Model.query().whereIn(key,array_data)
  }

  /**
   * GET SINGLE RECORD WITH ID
   * @param {*} model 
   * @param {*} id_data 
   */
  static async getSingleRecord(model, id_data) {
    const Model = use(model)
    const result = await Model.find(id_data)
    return result;
  }

  /**
   * INSERT DATA TO MODEL
   * @param {*} model 
   * @param {*} data 
   */
  static async insertRecord(model, data) {
    const Model = use(model)
    const dataModel = new Model();
    dataModel.fill(data)
    await dataModel.save()
    return dataModel
  }

  /**
   * DELETE RECORD WITH update is delete = true
   * @param {*} model 
   * @param {*} id_data 
   */
  static async deleteRecord(model, id_data) {
    return await this.updateRecord(model,{ is_deleted : true },id_data)
  }

  /**
   * UPDATE RECORD
   * @param {*} model 
   * @param {*} data 
   * @param {*} id_data 
   */
  static async updateRecord(model, data, id_data){
    const Model = use(model);
    const dataModel = await Model.find(id_data);
    dataModel.merge(data);
    await dataModel.save();
    return dataModel;
  }

  /**
   * LIST RECORD WITH IS_DELETED = FALSE 
   * @param {*} model 
   * @param {*} page 
   * @param {*} perPage 
   * @param {*} sortBy 
   * @param {*} key 
   * @param {*} descending 
   * @param {*} filter 
   */
  static async getListRecord(model, page, perPage, sortBy = 'id', key = '', descending, filter = []){
    return await this.getListRecordClear(model, page, perPage, sortBy, key = '', descending, filter, { is_deleted : false })
  }
  /**
   * LIST RECORD WITH WHRE
   * @param {*} model 
   * @param {*} page 
   * @param {*} perPage 
   * @param {*} sortBy 
   * @param {*} key 
   * @param {*} descending 
   * @param {*} filter 
   * @param {*} whereRecord 
   */
  static async getListRecordClear(model, page, perPage, sortBy = 'id', key = '', descending, filter = [],whereRecord = {} ) {
    const Model = use(model);
    var page = parseInt(page)
    if (!page) {
      page = 1
    }
    var limit = parseInt(perPage)
    var offset = (parseInt(page) - 1) * limit;
    console.log(sortBy);
    
    console.log((descending == 'true') ? 'desc' : 'asc');
    const data = await Model.query()
      .where((table) => {
        filter.forEach(index => {
            console.log(index);
          table.orWhere(index, 'like', '%' + key + '%')
        });
      })
      .where(whereRecord)
      // .where((whereTable) => { 
      //   whereRecord.forEach(index => {
      //     whereTable.Where(index.key, 'like', '%' + index.value + '%')
      //   })
      // })
      .where(whereRecord)
      .orderBy(sortBy, (descending == 'true') ? 'desc' : 'asc')
      .offset(offset)
      .limit(limit)

    const count = await Model.query().where((table) => {
      filter.forEach(index => {
        table.orWhere(index, 'like', '%' + key + '%')
      });
    }).where('is_deleted', false).count('* as total')
    
    const total = count[0].total
    var last_page = Math.ceil(total / limit)
    last_page = (!last_page) ? 1 : last_page
    return {
      content: data,
      pagginate: {
        total,
        current_page: page,
        last_page,
        per_page: limit
      }
    }
  }

  /**
   * Update Insert
   * @param {*} model 
   * @param {*} query : query dari data yang mau di update akan diambil data paling terakhir
   * @param {*} data : data yang mau di update
   */
  static async upsertRecord(model,query,data){
    const Model = use(model)
    var dataQuery = await Model.query().where(query).first()
    if (dataQuery) {
      dataQuery.merge(data);  
    }else{
      dataQuery = new Model();
      dataQuery.fill(data);
    }
    return await dataQuery.save();
  }
}

module.exports = CRUDService
