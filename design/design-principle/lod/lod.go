package lod

import "fmt"

func LOD() {
	hd := CreateHTMLDownloader(new(NetworkTransporter))
	html := hd.Download()
	doc := new(Document)
	doc.SetHtml(html)
	doc.Analyse()
}

type Transporter interface {
	Send(address string, data string) bool
}

type NetworkTransporter struct{}

func (nt *NetworkTransporter) Send(address string, data string) bool {
	fmt.Println("NetworkTransporter Send")
	return true
}

type HTMLDownloader struct {
	tp Transporter
}

func CreateHTMLDownloader(t Transporter) *HTMLDownloader {
	return &HTMLDownloader{tp: t}
}

func (hd *HTMLDownloader) Download() string {
	hd.tp.Send("/test", "data")
	return "Download"
}

type Document struct {
	html string
}

func (d *Document) SetHtml(html string) {
	d.html = html
}

func (d *Document) Analyse() {
	fmt.Println("document analyse " + d.html)
}
