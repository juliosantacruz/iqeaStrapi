import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalNavigarionPush extends Schema.Component {
  collectionName: 'components_global_navigarion_pushes';
  info: {
    displayName: 'navigationPush';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Component<'shared.link'>;
    image: Attribute.Media;
  };
}

export interface GlobalNavigationPanel extends Schema.Component {
  collectionName: 'components_global_navigation_panels';
  info: {
    displayName: 'navigationPanel';
    icon: 'briefcase';
  };
  attributes: {
    link: Attribute.Component<'shared.link'>;
    sections: Attribute.Component<'global.navigation-section', true>;
    pushes: Attribute.Component<'global.navigarion-push', true>;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalNavigationSection extends Schema.Component {
  collectionName: 'components_global_navigation_sections';
  info: {
    displayName: 'navigationSection';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.navigarion-push': GlobalNavigarionPush;
      'global.navigation-panel': GlobalNavigationPanel;
      'global.navigation-section': GlobalNavigationSection;
      'shared.link': SharedLink;
    }
  }
}
