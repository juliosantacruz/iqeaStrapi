/**
 * sistema-tratamiento controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::sistema-tratamiento.sistema-tratamiento', ({strapi})=>({
  async findOne(ctx){
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::sistema-tratamiento.sistema-tratamiento').findOne({
      where:{slug:id},
    });
    const sanatizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanatizedEntity)
  }
}));
