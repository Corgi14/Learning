package isp

import "fmt"

// 客户端不应该强迫依赖它不需要的接口

func ISP() {
	ScheduleUpdater(new(RedisConfig))
	ScheduleUpdater(new(KafkaConfig))
	ServerShow(new(RedisConfig))
	ServerShow(new(MySQLConfig))
}

type Updater interface {
	Update() bool
}

type Shower interface {
	Show() string
}

type RedisConfig struct {
}

func (redisConfig *RedisConfig) Connect() {
	fmt.Println("I am Redis")
}

func (redisConfig *RedisConfig) Update() bool {
	fmt.Println("Redis Update")
	return true
}

func (redisConfig *RedisConfig) Show() string {
	fmt.Println("Redis Show")
	return "Redis Show"
}

type MySQLConfig struct {
}

func (mySQLConfig *MySQLConfig) Connect() {
	fmt.Println("I am MySQL")
}

func (mySQLConfig *MySQLConfig) Show() string {
	fmt.Println("MySQL Show")
	return "MySQL Show"
}

type KafkaConfig struct {
}

func (kafkaConfig *KafkaConfig) Connect() {
	fmt.Println("I am Kafka")
}

func (kafkaConfig *KafkaConfig) Update() bool {
	fmt.Println("Kafka Update")
	return true
}

func ScheduleUpdater(updater Updater) bool {
	return updater.Update()
}
func ServerShow(shower Shower) string {
	return shower.Show()
}
