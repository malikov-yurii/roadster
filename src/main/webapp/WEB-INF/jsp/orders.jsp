<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://topjava.javawebinar.ru/functions" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ page isELIgnored="false" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
<head>
    <jsp:include page="fragments/headTag.jsp"/>
</head>
<body>
<jsp:include page="fragments/bodyHeader.jsp"/>

<div class="jumbotron">
    <div class="container">
        <%--<h3><fmt:message key="orders.title"/></h3>--%>
        <a class="btn btn-sm btn-success" onclick="addOrder('')"><fmt:message key="orders.add"/></a>
        <table class="order-table table-striped display" id="datatable">
            <thead>
            <tr class="order-table-head">
                <%--<th><fmt:message key="orders.showHide"/></th>--%>
                <th>ID</th>
                <th>custID</th>
                <th><fmt:message key="customers.lastName"/></th>
                <th><fmt:message key="customers.firstName"/></th>
                <th><fmt:message key="customers.phoneNumber"/></th>
                <th><fmt:message key="customers.city"/></th>
                <th><fmt:message key="customers.postOffice"/></th>
                <th><fmt:message key="orders.paymentType"/></th>
                <th><fmt:message key="orders.totalSum"/></th>
                <th><fmt:message key="orders.status"/></th>
                <th>Info</th>
                <%--<th><fmt:message key="orders.date"/></th>--%>
                <%--<th></th>--%>
                <%--<th></th>--%>
                <%--<th></th>--%>
            </tr>
            </thead>
        </table>
    </div>
</div>

<div class="modal fade" id="editCustomer">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h2 class="modal-title">Edit customer</h2>
            </div>
            <div class="modal-body">
                <form:form class="form-horizontal" method="post" id="detailsForm">
                    <div class="form-group">
                        <label for="id" class="control-label col-xs-3">ID</label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" disabled="disabled" id="id" name="id">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="firstName" class="control-label col-xs-3"><fmt:message
                                key="customers.firstName"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="firstName" name="name"
                                   placeholder="<fmt:message key="customers.firstName"/>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="lastName" class="control-label col-xs-3"><fmt:message
                                key="customers.lastName"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="lastName" name="lastName"
                                   placeholder="<fmt:message key="customers.lastName"/>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber" class="control-label col-xs-3"><fmt:message
                                key="customers.phoneNumber"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="phoneNumber" name="phoneNumber"
                                   placeholder="<fmt:message key="customers.phoneNumber"/>">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="city" class="control-label col-xs-3"><fmt:message
                                key="customers.city"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="city" name="city"
                                   placeholder="<fmt:message key="customers.city"/>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="postOffice" class="control-label col-xs-3"><fmt:message
                                key="customers.postOffice"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="postOffice" name="postOffice"
                                   placeholder="<fmt:message key="customers.postOffice"/>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label col-xs-3"><fmt:message
                                key="customers.email"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="email" name="email"
                                   placeholder="<fmt:message key="customers.email"/>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="note" class="control-label col-xs-3"><fmt:message
                                key="customers.note"/></label>

                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="note" name="note"
                                   placeholder="<fmt:message key="customers.note"/>">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-offset-3 col-xs-9">
                            <button class="btn btn-primary" type="button" onclick="saveCustomer()"><fmt:message key="common.save"/></button>
                        </div>
                    </div>
                </form:form>
            </div>
        </div>
    </div>
</div>
</body>

<script type="text/javascript">
    var edit_title = '<fmt:message key="orders.edit"/>';
</script>


<jsp:include page="fragments/footer.jsp"/>
<script type="text/javascript" src="resources/js/orderDatatables.js"></script>

</html>