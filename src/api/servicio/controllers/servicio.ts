/**
 * servicio controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::servicio.servicio', ({strapi})=>({
  async findOne(ctx){
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::servicio.servicio').findOne({
      where:{slug:id},
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
