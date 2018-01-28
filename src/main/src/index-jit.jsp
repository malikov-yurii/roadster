<%@ page contentType="text/html;charset=UTF-8" language="java"          %>
<%@ taglib prefix="c"    uri="http://java.sun.com/jsp/jstl/core"        %>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt"         %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn"   uri="http://java.sun.com/jsp/jstl/functions"   %>
<!DOCTYPE html>
<html>
<head>
    <meta charset=UTF-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Online Shop Management System</title>

    <base href="/">

    <link rel="shortcut icon" href="assets/images/icon-main.png">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="/assets/css/spinner.css" rel="stylesheet">
    <link href="/assets/css/style.css" rel="stylesheet">

    <script src="/polyfills.js"></script>
    <script src="/app/systemjs.config.js"></script>
    <script>
        var dbOrders = {
            content: ${orders},
            totalElements: ${ordersTotal}
        }
        System.import('app').catch(function (err) {
            console.error(err);
        });
    </script>

</head>
<body>

<app>
    <div class="spinner-container">
        <div class="spinner">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
    </div>
</app>

</body>
</html>