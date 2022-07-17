const React = require('react')

exports.onRenderBody = (
  { setPostBodyComponents, setHeadComponents },
  pluginOptions
) => {
  setHeadComponents([
    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KHWDWJJ" />,
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-124722883-1"
    />,
    <script
      key="gtag"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-124722883-1');`,
      }}
    />,
    <script
      data-obct
      type="text/javascript"
      key="outbrain"
      dangerouslySetInnerHTML={{
        __html: ` /** DO NOT MODIFY THIS CODE**/
        !function(_window, _document) {
          var OB_ADV_ID = '002de86614cd3b289911de71f95afd713c';
          if (_window.obApi) {
            var toArray = function(object) {
              return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];
            };
            _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));
            return;
          }
          var api = _window.obApi = function() {
            api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);
          };
          api.version = '1.1';
          api.loaded = true;
          api.marketerId = OB_ADV_ID;
          api.queue = [];
          var tag = _document.createElement('script');
          tag.async = true;
          tag.src = '//amplify.outbrain.com/cp/obtp.js';
          tag.type = 'text/javascript';
          var script = _document.getElementsByTagName('script')[0];
          script.parentNode.insertBefore(tag, script);
        }(window, document);
      
        obApi('track', 'PAGE_VIEW');`,
      }}
    />,
  ])

  setPostBodyComponents([
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    />,
    <script
      key={`gatsby-plugin-calendly`}
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var d = document
            var s = d.createElement('script')
            s.type = 'text/javascript'
            s.async = false
            s.src =
              'https://assets.calendly.com/assets/external/widget.js'
            var x = d.getElementsByTagName('script')[0]
            x.parentNode.insertBefore(s, x)
          })()
          `,
      }}
    />,
    <script
      key="helpscout-plugin"
      dangerouslySetInnerHTML={{
        __html: `
        !(function(e, t, n) {
          function a() {
            var e = t.getElementsByTagName('script')[0],
              n = t.createElement('script')
            ;(n.type = 'text/javascript'),
              (n.async = !0),
              (n.src = 'https://beacon-v2.helpscout.net'),
              e.parentNode.insertBefore(n, e)
          }
          if (
            ((e.Beacon = n = function(t, n, a) {
              e.Beacon.readyQueue.push({ method: t, options: n, data: a })
            }),
            (n.readyQueue = []),
            'complete' === t.readyState)
          )
            return a()
          e.attachEvent
            ? e.attachEvent('onload', a)
            : e.addEventListener('load', a, !1)
        })(window, document, window.Beacon || function() {})`,
      }}
    />,
    <script
      key="init-helpscout"
      dangerouslySetInnerHTML={{
        __html: `window.Beacon('init', '2baef6b7-c744-4647-a270-b2d5c9a79bd2')`,
      }}
    />,
    <link href="" rel="stylesheet" />,
    <script
      key="axceptio"
      dangerouslySetInnerHTML={{
        __html: `
        window.axeptioSettings = {
          clientId: "60bf9320738e6c4469f81a93",
        };
         
        (function(d, s) {
          var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
          e.async = true; e.src = "//static.axept.io/sdk.js";
          t.parentNode.insertBefore(e, t);
        })(document, "script");
          `,
      }}
    />,
    <script
      key="google-salesforce"
      dangerouslySetInnerHTML={{
        __html: `
        function getParam(p) {
          var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
          return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        }
        
        function getExpiryRecord(value) {
          var expiryPeriod = 90 * 24 * 60 * 60 * 1000; // Période d'expiration correspondant à 90 jours en millisecondes
        
          var expiryDate = new Date().getTime() + expiryPeriod;
          return {
            value: value,
            expiryDate: expiryDate
          };
        }
        
        function addGclid() {
          var gclidParam = getParam('gclid');
          var gclidFormFields = ['gclid_field', "first_name", "last_name", "phone", "compagny", "email", "00N5J0000035QEu"]; // Ajouter ici tous les ID du champ de formulaire GCLID possibles
          var gclidRecord = null;
          var currGclidFormField;
        
          var gclsrcParam = getParam('gclsrc');
          var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;
        
          gclidFormFields.forEach(function (field) {
            if (document.getElementById(field)) {
              currGclidFormField = document.getElementById(field);
            }
          });
        
          if (gclidParam && isGclsrcValid) {
            gclidRecord = getExpiryRecord(gclidParam);
            localStorage.setItem('gclid', JSON.stringify(gclidRecord));
          }
        
          var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
          var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;
        
          if (currGclidFormField && isGclidValid) {
            currGclidFormField.value = gclid.value;
          }
        }
        
        window.addEventListener('load', addGclid);
        `,
      }}
    />,
    // HubSpot
    <script
      type="text/javascript"
      id="hs-script-loader"
      async
      defer
      src="//js-eu1.hs-scripts.com/25191803.js"
    />,
  ])
}
