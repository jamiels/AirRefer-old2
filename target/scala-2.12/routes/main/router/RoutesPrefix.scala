// @GENERATOR:play-routes-compiler
// @SOURCE:D:/airrefer-ang/conf/routes
// @DATE:Mon Jul 09 23:53:01 EDT 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
