/**
 * This is the default settings file provided by Node-RED.
 *
 * It can contain any valid JavaScript code that will get run when Node-RED
 * is started.
 *
 * Lines that start with // are commented out.
 * Each entry should be separated from the entries above and below by a comma ','
 *
 * For more information about individual settings, refer to the documentation:
 *    https://nodered.org/docs/user-guide/runtime/configuration
 **/

module.exports = {
    // the tcp port that the Node-RED web server is listening on
    uiPort: process.env.PORT || 1880,


    // Retry time in milliseconds for MQTT connections
    mqttReconnectTime: 15000,

    // Retry time in milliseconds for Serial port connections
    serialReconnectTime: 15000,


    // The maximum length, in characters, of any message sent to the debug sidebar tab
    debugMaxLength: 1000,

    // The following property can be used to seed Global Context with predefined
    // values. This allows extra node modules to be made available with the
    // Function node.
    // For example,
    //    functionGlobalContext: { os:require('os') }
    // can be accessed in a function block as:
    //    global.get("os")
    functionGlobalContext: {
        // os:require('os'),
        // jfive:require("johnny-five"),
        // j5board:require("johnny-five").Board({repl:false})
    },
    // `global.keys()` returns a list of all properties set in global context.
    // This allows them to be displayed in the Context Sidebar within the editor.
    // In some circumstances it is not desirable to expose them to the editor. The
    // following property can be used to hide any property set in `functionGlobalContext`
    // from being list by `global.keys()`.
    // By default, the property is set to false to avoid accidental exposure of
    // their values. Setting this to true will cause the keys to be listed.
    exportGlobalContextKeys: false,


    // Context Storage
    // The following property can be used to enable context storage. The configuration
    // provided here will enable file-based context that flushes to disk every 30 seconds.
    // Refer to the documentation for further options: https://nodered.org/docs/api/context/
    //
    //contextStorage: {
    //    default: {
    //        module:"localfilesystem"
    //    },
    //},

    // The following property can be used to order the categories in the editor
    // palette. If a node's category is not in the list, the category will get
    // added to the end of the palette.
    // If not set, the following default order is used:
    //paletteCategories: ['subflows', 'common', 'function', 'network', 'sequence', 'parser', 'storage'],

    // Configure the logging output
    logging: {
        // Only console logging is currently supported
        console: {
            // Level of logging to be recorded. Options are:
            // fatal - only those errors which make the application unusable should be recorded
            // error - record errors which are deemed fatal for a particular request + fatal errors
            // warn - record problems which are non fatal + errors + fatal errors
            // info - record information about the general running of the application + warn + error + fatal errors
            // debug - record information which is more verbose than info + info + warn + error + fatal errors
            // trace - record very detailed logging + debug + info + warn + error + fatal errors
            // off - turn off all logging (doesn't affect metrics or audit)
            level: "info",
            // Whether or not to include metric events in the log output
            metrics: false,
            // Whether or not to include audit events in the log output
            audit: false
        }
    },

    // Customising the editor
    editorTheme: {
        page: {
            title: "TigerFlow by Node-RED",
            favicon: "/usr/src/node-red/favicon.ico"
            
        },
        header: {
            title: "TigerFlow",
            image: "/usr/src/node-red/logo.png", // or null to remove image
            url: "https://tigergraph.com" // optional url to make the header text/image a link to this url
        }
        
    }
}
