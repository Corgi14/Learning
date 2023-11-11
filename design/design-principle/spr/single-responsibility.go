package spr

import "fmt"

// 一个类只负责完成一个职责或者功能
type Game struct {
	x int64
	y int64
}

func (game *Game) Show() {
	fmt.Println(game.x, game.y)
}
func (game *Game) Move() {
	game.x++
	game.y++
}
func SPR() {
	game := new(Game)
	game.Show()
	game.Move()
	game.Show()
}
