package lsp

import "fmt"

// 子类对象能够替换程序(program)中父类对象出现的任何地方，并且保证原来程序的逻辑行为(behavior)不变及正确性不被破坏

func LSP() {
	LetDo(new(Message))
	LetDo(new(SMS))
}

type Notify interface {
	Send()
}

type Message struct {
}

func (msg *Message) Send() {
	fmt.Println("message send.")
}

type SMS struct{}

func (sms *SMS) Send() {
	fmt.Println("sms send.")
}

func LetDo(notify Notify) {
	notify.Send()
}
