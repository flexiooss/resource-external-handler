/**
 * @interface
 */
export class ExternalChooser {
  /**
   * @return {string}
   */
  name() {
    throw new Error('should be override')
  }

  /**
   *
   * @param {ActionDispatcher<PropertyValue, PropertyValueBuilder>} changePropertyValueActionDispatcher
   * @param {ActionDispatcher<OpenExternalHandler, OpenExternalHandlerBuilder>} openExternalChooserActionDispatcher
   * @param {ComponentAtmosphereLayersPublicHandler} layersHandler
   * @return {string}
   */
  register(changePropertyValueActionDispatcher, openExternalChooserActionDispatcher, layersHandler) {
    throw new Error('should be override')
  }

  /**
   *
   * @param {string} token
   */
  remove(token) {
    throw new Error('should be override')
  }
}
