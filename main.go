package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"net/http"
	"strconv"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.POST("/number", number)
	e.Logger.Fatal(e.Start(":1323"))
}

type Number struct {
	Num		string	`json:"number"`
	Result	string	`json:"result"`
	Err		bool	`json:"err"`
	ErrMsg	string	`json:"errMsg"`
}

func number(c echo.Context) error {
	n := new(Number)
	n.Num = c.FormValue("number")
	numInt, err := strconv.Atoi(n.Num)
	if err != nil {
		n.Err = true
		n.ErrMsg = err.Error()
	}else{
		result := n.Num + " x 2 = "
		n.Result = result + strconv.Itoa(numInt * 2)
	}
	return c.JSON(http.StatusOK, n)
}
