# ng-application-bootstrap

Manually bootstrap applications with class .ng-application

## Bower
`"ng-application-bootstrap": "latest"`

## Example

```HTML
<div class="ng-application" application-name="first-application"></div>
<div class="ng-application" application-name="second-application"></div>

<script src="/angular.js"></script>

<script>
  angular.module('first-application', []);
  angular.module('second-application', []);
</script>

<script src="/ng-application-bootstrap/bootstrap.js"></script>

```
