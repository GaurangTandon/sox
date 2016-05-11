(function(sox, $, undefined) {
        'use strict';

        sox.github = {
            init: function(version, manager) {
                // auto-inject version number and environment information into GitHub issues
                function inject() {
                    var $issue = $('#issue_body');
                    if ($issue.length) {
                        $issue.prop('disabled', 'true');
                        var issueText = $issue.text();

                        issueText = issueText.replace('1.X.X', version); //inject the SOX version by replacing the issue template's placeholder '1.X.X'
                        issueText = issueText.replace('Chrome/Tampermonkey', manager); //inject the SOX userscript manager+platfirm by replacing the issue template's placeholder 'Chrome/Tampermonkey'
                        $('#issue_body').delay(500).text(issueText).removeAttr('disabled');
                    }
                }

                if (sox.location.on('github.com')) {
                    inject();
                }

                $(document).on('pjax:complete', function() {
                    if (sox.location.on('github.com')) {
                        inject();
                    }
                });
                return;
            }
    };
})(window.sox = window.sox || {}, jQuery);
