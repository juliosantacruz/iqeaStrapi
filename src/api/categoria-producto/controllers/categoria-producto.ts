/**
 * categoria-producto controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::categoria-producto.categoria-producto',  ({strapi})=>({
  async findOne(ctx){
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::categoria-producto.categoria-producto').findOne({
      where:{slug}
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
