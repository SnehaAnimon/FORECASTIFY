<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container pb-3">
        <div class="row">
            <div class="col">
                <form>
                   <h3 class="alert text-light text-center white-color">Weather</h3>
                    <div class="mb-3">
                        <select name="countrylist" id="countrylist" class="form-select">
                        </select>
                    </div>
                    <div class="mb-3">
                        <select name="statelist" id="statelist" class="form-select" disabled>
                            <option value="">Select State</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <select name="citylist" id="citylist" class="form-select" disabled>
                            <option value="">Select City</option>
                        </select>
                    </div>
                </form>
                <div class="d-flex justify-content-center align-items-center" id="weatherwidget">
                </div>
            </div>
        </div>
    </div>
    
    <script src="main.js"></script>
</body>
</html>
