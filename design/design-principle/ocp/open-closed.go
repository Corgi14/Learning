package ocp

import "fmt"

// 对扩展开放、修改关闭(OCP)
// 添加一个新的功能，应该是通过在已有代码基础上扩展代码(新增模块、类、方法、属性等)
// 而非修改已有代码(修改模块、类、方法、属性等)的方式来完成。
func OCP() {
	alert := CreateAlert()
	alertRules := new(AlertRules)
	notification := new(Notification)
	alert.AddHandler(CreateTPSAlertHandler(alertRules, notification))
	alert.AddHandler(CreateErrAlertHandler(alertRules, notification))
	alert.AddHandler(CreateTimeoutAlertHandler(alertRules, notification))
	alert.CheckNew(ApiStatInfo{api: "test", timeoutCount: 20, errCount: 20, tps: 20})
}

// 假设我们要做一个API接口监控告警，如果TPS或Error超过指定值，则根据不同的紧急情况通过不同方式（邮箱、电话）通知相关人员。
type AlertRules struct{}

func (alertRules *AlertRules) GetMaxTPS(api string) int64 {
	if api == "test" {
		return 10
	}
	return 100
}

func (alertRules *AlertRules) GetMaxError(api string) int64 {
	if api == "test" {
		return 10
	}
	return 100
}

func (alertRules *AlertRules) GetMaxTimeout(api string) int64 {
	if api == "test" {
		return 10
	}
	return 100
}

const (
	SERVER = "SERVER"
	URGENT = "URGENT"
)

type Notification struct {
}

func (notification *Notification) Notify(notifyLv string) bool {
	if notifyLv == SERVER {
		fmt.Println("Call")
	} else if notifyLv == URGENT {
		fmt.Println("Message")
	} else {
		fmt.Println("Email")
	}
	return true
}

type Alert struct {
	handlers []AlertHandler
}

func (alert *Alert) AddHandler(alertHandler AlertHandler) {
	alert.handlers = append(alert.handlers, alertHandler)
}

func (alert *Alert) CheckNew(apiStatInfo ApiStatInfo) bool {
	for _, ah := range alert.handlers {
		ah.Check(apiStatInfo)
	}
	return true
}

func CreateAlert() *Alert {
	return &Alert{}
}

type ApiStatInfo struct {
	api          string
	tps          int64
	errCount     int64
	timeoutCount int64
}

type AlertHandler interface {
	Check(apiStateInfo ApiStatInfo) bool
}

type TPSAlertHandler struct {
	alertRules   *AlertRules
	notification *Notification
}

func CreateTPSAlertHandler(a *AlertRules, n *Notification) *TPSAlertHandler {
	return &TPSAlertHandler{
		alertRules:   a,
		notification: n,
	}
}

func (tpsAH *TPSAlertHandler) Check(apiStateInfo ApiStatInfo) bool {
	if apiStateInfo.tps > tpsAH.alertRules.GetMaxTPS(apiStateInfo.api) {
		tpsAH.notification.Notify(URGENT)
	}
	return true
}

type ErrAlertHandler struct {
	alertRules   *AlertRules
	notification *Notification
}

func CreateErrAlertHandler(a *AlertRules, n *Notification) *ErrAlertHandler {
	return &ErrAlertHandler{
		alertRules:   a,
		notification: n,
	}
}

func (errAH *ErrAlertHandler) Check(apiStateInfo ApiStatInfo) bool {
	if apiStateInfo.tps > errAH.alertRules.GetMaxError(apiStateInfo.api) {
		errAH.notification.Notify(URGENT)
	}
	return true
}

type TimeoutAlertHandler struct {
	alertRules   *AlertRules
	notification *Notification
}

func CreateTimeoutAlertHandler(a *AlertRules, n *Notification) *TimeoutAlertHandler {
	return &TimeoutAlertHandler{
		alertRules:   a,
		notification: n,
	}
}

func (timeoutAH *TimeoutAlertHandler) Check(apiStateInfo ApiStatInfo) bool {
	if apiStateInfo.tps > timeoutAH.alertRules.GetMaxTimeout(apiStateInfo.api) {
		timeoutAH.notification.Notify(URGENT)
	}
	return true
}
