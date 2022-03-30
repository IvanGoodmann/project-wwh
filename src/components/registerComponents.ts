import {App} from 'vue'

import { ErrorMessage } from 'vee-validate'
import ThePublicLayout from '@/components/layouts/ThePublicLayout.vue'
import ThePrivateLayout from '@/components/layouts/ThePrivateLayout.vue'
import TheHeader from '@/components/app-components/TheHeader.vue'
import TheSidebar from '@/components/app-components/TheSidebar.vue'
import BaseContainer from '@/components/base-components/BaseContainer.vue'
import BaseSidebarList from '@/components/base-components/sidebar/BaseSidebarList.vue'
import BaseSidebarLink from '@/components/base-components/sidebar/BaseSidebarLink.vue'
import AuthGrid from '@/components/auth-components/AuthGrid.vue'
import FieldComponent from '@/components/FieldComponent.vue'
import Spinner from '@/components/Spinner.vue'
import BaseIcon from '@/components/base-components/BaseIcon.vue'

// register components
export const registerComponents = (app: App): void => {
  app.component('ErrorMessage', ErrorMessage )
  app.component('ThePublicLayout', ThePublicLayout)
  app.component('ThePrivateLayout', ThePrivateLayout)
  app.component('TheHeader', TheHeader)
  app.component('TheSidebar', TheSidebar)
  app.component('BaseContainer', BaseContainer)
  app.component('BaseSidebarList', BaseSidebarList)
  app.component('BaseSidebarLink', BaseSidebarLink)
  app.component('AuthGrid', AuthGrid)
  app.component('FieldComponent', FieldComponent)
  app.component('Spinner', Spinner)
  app.component('BaseIcon', BaseIcon)
}