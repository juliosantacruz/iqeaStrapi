/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog',  ({strapi})=>({
  async findOne(ctx){
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::blog.blog').findOne({
      where:{slug}
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
