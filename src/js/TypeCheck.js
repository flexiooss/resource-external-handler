import {ExternalChooser, ExternalChooserPublic} from './ExternalChooser'
import {ExternalRender, ExternalRenderPublic} from './ExternalRender'
import {assertType} from '@flexio-oss/assert'
import {ExternalChooserPublicMap} from './ExternalChooserPublicMap'
import {ExternalRenderPublicMap} from './ExternalRenderPublicMap'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'


export class TypeCheck {
  /**
   *
   * @param {ExternalChooser} inst
   * @return {boolean}
   */
  static isExternalChooser(inst) {
    return inst instanceof ExternalChooser
  }

  /**
   *
   * @param {ExternalChooserPublic} inst
   * @return {boolean}
   */
  static isExternalChooserPublic(inst) {
    return inst instanceof ExternalChooserPublic
  }

  /**
   *
   * @param {ExternalChooser} inst
   * @throws {TypeError}
   */
  static assertIsExternalChooser(inst) {
    assertType(TypeCheck.isExternalChooser(inst), '`inst` should be ExternalChooser')
  }

  /**
   *
   * @param {ExternalChooserPublicMap} inst
   * @return {boolean}
   */
  static isExternalChooserPublicMap(inst) {
    return inst instanceof ExternalChooserPublicMap
  }

  /**
   *
   * @param {ExternalRender} inst
   * @return {boolean}
   */
  static isExternalRender(inst) {
    return inst instanceof ExternalRender
  }

  /**
   *
   * @param {ExternalRenderPublic} inst
   * @return {boolean}
   */
  static isExternalRenderPublic(inst) {
    return inst instanceof ExternalRenderPublic
  }

  /**
   *
   * @param {ExternalRender} inst
   * @throws {TypeError}
   */
  static assertIsExternalRender(inst) {
    assertType(TypeCheck.isExternalRender(inst), '`inst` should be ExternalRender')
  }

  /**
   *
   * @param {ExternalRenderPublicMap} inst
   * @return {boolean}
   */
  static isExternalRenderPublicMap(inst) {
    return inst instanceof ExternalRenderPublicMap
  }

  /**
   *
   * @param {OpenExternalChooser} inst
   * @return {boolean}
   */
  static isOpenExternalChooser(inst) {
    return inst instanceof globalFlexioImport.io.flexio.resource_external_handler.actions.OpenExternalChooser
  }

  /**
   *
   * @param {OpenExternalChooser} inst
   * @throws {TypeError}
   */
  static assertIsOpenExternalChooser(inst) {
    assertType(TypeCheck.isOpenExternalChooser(inst), '`inst` should be OpenExternalChooser')
  }

}
