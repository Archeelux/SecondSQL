---
title: CTE Test
tags: snippets
desc: "Cte is a sugar <a>syntax</a> used in testing"
code: ""
---

WITH Employee_CTE (EmployeeNumber, Title)
AS
(SELECT NationalIDNumber,
JobTitle
FROM HumanResources.Employee)
SELECT EmployeeNumber,
Title
FROM Employee_CTE
