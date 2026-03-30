# 🔭 Observakit

> Self-hosted, open-source observability platform for containerized applications
> *(Logs • Metrics • Traces — all in your own infrastructure)*

---

## 🚀 Overview

Observakit is a **backend + DevOps system** that provides a complete observability pipeline for applications running in containers.

It enables teams to:

* Collect logs, metrics, and traces
* Process and analyze data in real time
* Store data efficiently at scale
* Trigger alerts on anomalies
* Visualize system behavior via Grafana

All while ensuring that **data remains within the user's infrastructure**, avoiding vendor lock-in and external dependencies.

---

## 🧠 Architecture (High Level)

```
Containers
   ↓
Collection (Fluent Bit, Prometheus, OpenTelemetry)
   ↓
Kafka (data transport)
   ↓
Processing (Node.js services)
   ↓
Storage (ClickHouse, TimescaleDB, Redis)
   ↓
Query + Alerts (Node.js API)
   ↓
Visualization (Grafana)
```

---

## 🛠️ Tech Stack

### Collection

* Fluent Bit (logs)
* Prometheus exporters (metrics)
* OpenTelemetry (traces)

### Transport

* Apache Kafka

### Processing

* Node.js (log parser, anomaly detection, alerting, query APIs)

### Storage

* ClickHouse (log analytics)
* TimescaleDB (time-series metrics)
* Redis (caching & deduplication)

### Infrastructure

* Docker
* Kubernetes (planned)
* Helm (planned)

### CI/CD

* GitHub Actions
* ArgoCD (planned)

### Visualization

* Grafana

---

## 📁 Project Structure

```
observakit/
│
├── services/              # Core services + test applications
│   └── log-generator/     # Simulates real-world logs
│
├── infrastructure/        # Kafka, databases, Docker setup
│   └── docker-compose.yml
│
├── configs/               # Configuration files
│
├── docs/                  # Documentation
│
├── .env
└── README.md
```

---

## 🧪 Goal

Build a **production-grade distributed observability system** that demonstrates:

* Event-driven architecture using Kafka
* High-throughput data pipelines
* Efficient analytical storage systems
* Real-time anomaly detection and alerting
* Containerized deployment and orchestration
* CI/CD and GitOps workflows

---

## 💡 Why Observakit?

Observakit focuses on **real-world backend and DevOps challenges**, including:

* Distributed system design
* Scalable data processing
* Observability engineering
* Infrastructure automation

---

## 📌 Author

**Swayam Wakodikar**
ECE @ VIT-AP • Backend & Embedded Systems Enthusiast
