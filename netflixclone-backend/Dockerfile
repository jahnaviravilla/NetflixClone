

FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

COPY . .

RUN chmod +x mvnw && ./mvnw clean package

CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
