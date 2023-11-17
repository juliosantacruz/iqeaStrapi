/**
 * proceso controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::proceso.proceso',  ({strapi})=>({
  async findOne(ctx){
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::proceso.proceso').findOne({
      where:{slug:id},
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
