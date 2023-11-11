package singleton

import (
	"fmt"
	"sync"
)

type singleton struct{}

func (s *singleton) Show() {
	fmt.Println("hello world")
}

var (
	once   sync.Once
	single *singleton
)

func GetSingleInstance() *singleton {
	once.Do(func() {
		single = &singleton{}
	})
	return single
}
