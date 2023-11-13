/**
 * formularios-contacto controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::formularios-contacto.formularios-contacto',  ({strapi})=>({
  async findOne(ctx){
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::formularios-contacto.formularios-contacto').findOne({
      where:{slug}
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
