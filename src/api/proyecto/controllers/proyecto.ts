/**
 * proyecto controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::proyecto.proyecto',  ({strapi})=>({
  async findOne(ctx){
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::proyecto.proyecto').findOne({
      where:{slug}
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
