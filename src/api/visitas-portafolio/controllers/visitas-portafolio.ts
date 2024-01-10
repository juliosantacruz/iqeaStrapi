/**
 * visitas-portafolio controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::visitas-portafolio.visitas-portafolio",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::visitas-portafolio.visitas-portafolio")
        .findOne({
          where: { slug: id },
        });
      const sanatizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanatizedEntity);
    },
  })
);
