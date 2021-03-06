exports.success = function () {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{{projectName}}</title>
</head>

<body>

<h1 style="margin:0;padding:24px;border:1px;font-size:18px;text-align:center;">
    <img src="{{imgSuccessStatusLogo}}" width="44" style="display:block;margin:0 auto;">
    <span style="display:block;margin:12px 0 24px;">[ApiWay][{{projectResult}}] {{projectName}}</span>
</h1>
<table width="100%" bgcolor="#EAF0F4" border="0" cellpadding="60" cellspacing="0">
    <tr>
        <td>
            <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;min-width:580px;">
                <tr>
                    <td valign="top">
                        <p style="text-align:center;margin:0;padding:36px 0;">
                            <img src="{{imgMainLogo}}" style="height:34px;display:inline-block;"/>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <table bgcolor="#39CA00" width="100%" class="content" align="center" cellpadding="0"
                               cellspacing="0" border="0"
                               style="border-radius:9px 9px 0 0;box-shadow:0 3px 12px rgba(137,152,170,.15);">
                            <tr>
                                <td width="72" style="background:rgba(0,0,0,.1);border-radius:9px 0 0" align="center"
                                    valign="middle"><img src="{{imgSuccessLogo}}"
                                                         style="height:44px;display:inline-block;"></td>
                                <td style="color:#FFF;text-align:left;padding:0 24px;font:500 16px/54px 'Ubuntu',sans-serif;cursor:default;">
                                    {{projectResult}}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"
                                    style="padding:0 16px;background:#FFF;text-align:center;border-bottom:1px solid #EAF0F4;">
                                    <a href="#"
                                       style="color:#455364;font:500 20px/64px 'Ubuntu',sans-serif;text-decoration:none;letter-spacing:1px;"
                                       title="view this project">{{projectName}}</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top"
                        style="padding:24px;border-bottom:1px solid #EAF0F4;background:#FFF;box-shadow:0 3px 12px rgba(137,152,170,.15);">
                        <table border="0" cellpadding="0" cellspacing="10" width="100%">
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Suites:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{suite}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Tests:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{tests}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Passes:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{passes}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Pending:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{pending}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Failures:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{failures}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Start:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;"><a
                                        href="#" title="view this test" target="_blank"
                                        style="font-weight:500;color:#5B697A;">{{start}}</a></td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">End:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;"><a
                                        href="#" title="view this test" target="_blank"
                                        style="font-weight:500;color:#5B697A;">{{end}}</a></td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Duration:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{duration}}
                                </td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PassPercent:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">
                                    {{testPercent}}
                                </td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PendingPercent:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{pendingPercent}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Skipped:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{skipped}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PassPercentClass:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{passPercentClass}}
                                </td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PendingPercentClass:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{pendingPercentClass}}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center" style="padding:32px 0 0;">
                                    <a href="{{reportHtml}}"
                                       style="display:inline-block;padding:14px 32px 16px;border:3px solid #EAF0F4;border-radius:9px;color:#5B697A;font:600 14px/1.2 'Ubuntu', sans-serif;text-decoration:none;">Show Full Test Report</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="padding:12px;">
                        <table border="0" cellpadding="0" cellspacing="10" width="100%">
                            <tr>
                                <td valign="top">
                                    <a href="http://apiway.io/"
                                       style="color:#5B697A;font:600 13px/1.2 'Helvetica','verdana',Arial,sans-serif;text-decoration:none;">apiway.io</a>
                                </td>
                                <td valign="top" align="right"
                                    style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">
                                    <a href="#" style="font-size:12px;color:#8998AA;">Set Change the Notification</a>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center"
                                    style="padding:24px 0;font:300 12px/1.5 'Ubuntu',sans-serif;color:#8998AA;">This
                                    email is lorem ipsum dollor sit amet every time again.<br/>This email is lorem ipsum
                                    dollor sit amet every time again and yolo!
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>`;
};

exports.failures = function () {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{{projectName}}</title>
</head>

<body>

<h1 style="margin:0;padding:24px;border:1px;font-size:18px;text-align:center;">
    <img src="{{imgFailStatusLogo}}" width="44" style="display:block;margin:0 auto;">
    <span style="display:block;margin:12px 0 24px;">[ApiWay][{{projectResult}}] {{projectName}}</span>
</h1>
<table width="100%" bgcolor="#EAF0F4" border="0" cellpadding="60" cellspacing="0">
    <tr>
        <td>
            <table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;min-width:580px;">
                <tr>
                    <td valign="top">
                        <p style="text-align:center;margin:0;padding:36px 0;">
                            <img src= "{{imgMainLogo}}" style="height:34px;display:inline-block;"/>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <table bgcolor="#FF7947" width="100%" class="content" align="center" cellpadding="0"
                               cellspacing="0" border="0"
                               style="border-radius:9px 9px 0 0;box-shadow:0 3px 12px rgba(137,152,170,.15);">
                            <tr>
                                <td width="72" style="background:rgba(0,0,0,.1);border-radius:9px 0 0" align="center"
                                    valign="middle"><img src= "{{imgFailLogo}}"
                                                         style="height:44px;display:inline-block;"></td>
                                <td style="color:#FFF;text-align:left;padding:0 24px;font:500 16px/54px 'Ubuntu',sans-serif;cursor:default;">
                                    {{projectResult}}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"
                                    style="padding:0 16px;background:#FFF;text-align:center;border-bottom:1px solid #EAF0F4;">
                                    <a href="#"
                                       style="color:#455364;font:500 20px/64px 'Ubuntu',sans-serif;text-decoration:none;letter-spacing:1px;"
                                       title="view this project">{{projectName}}</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top"
                        style="padding:24px;border-bottom:1px solid #EAF0F4;background:#FFF;box-shadow:0 3px 12px rgba(137,152,170,.15);">
                        <table border="0" cellpadding="0" cellspacing="10" width="100%">
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Suites:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{suite}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Tests:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{tests}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Passes:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{passes}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Pending:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{pending}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Failures:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{failures}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Start:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;"><a
                                        href="#" title="view this test" target="_blank"
                                        style="font-weight:500;color:#5B697A;">{{start}}</a></td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">End:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;"><a
                                        href="#" title="view this test" target="_blank"
                                        style="font-weight:500;color:#5B697A;">{{end}}</a></td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Duration:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{duration}}
                                </td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PassPercent:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">
                                    {{testPercent}}
                                </td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PendingPercent:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{pendingPercent}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">Skipped:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{skipped}}</td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PassPercentClass:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{passPercentClass}}
                                </td>
                            </tr>
                            <tr>
                                <td width="36%" valign="top"
                                    style="font:600 14px/1.2 'Ubuntu',sans-serif;color:#455364;">PendingPercentClass:
                                </td>
                                <td valign="top" style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">{{pendingPercentClass}}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center" style="padding:32px 0 0;">
                                    <a href="{{reportHtml}}"
                                       style="display:inline-block;padding:14px 32px 16px;border:3px solid #EAF0F4;border-radius:9px;color:#5B697A;font:600 14px/1.2 'Ubuntu', sans-serif;text-decoration:none;">Show Full Test Report</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" style="padding:12px;">
                        <table border="0" cellpadding="0" cellspacing="10" width="100%">
                            <tr>
                                <td valign="top">
                                    <a href="http://apiway.io/"
                                       style="color:#5B697A;font:600 13px/1.2 'Helvetica','verdana',Arial,sans-serif;text-decoration:none;">apiway.io</a>
                                </td>
                                <td valign="top" align="right"
                                    style="font:300 14px/1.2 'Ubuntu',sans-serif;color:#455364;">
                                    <a href="#" style="font-size:12px;color:#8998AA;">Set Change the Notification</a>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center"
                                    style="padding:24px 0;font:300 12px/1.5 'Ubuntu',sans-serif;color:#8998AA;">This
                                    email is lorem ipsum dollor sit amet every time again.<br/>This email is lorem ipsum
                                    dollor sit amet every time again and yolo!
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>`;
};