/**
 * tipo-proceso controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::tipo-proceso.tipo-proceso', ({strapi})=>({
  async findOne(ctx){
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::tipo-proceso.tipo-proceso').findOne({
      where:{slug:id},
      populate:['procesos']
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
