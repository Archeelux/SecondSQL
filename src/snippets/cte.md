---
title: CTE Test
tags: snippets
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
