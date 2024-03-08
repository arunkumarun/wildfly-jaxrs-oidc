FROM quay.io/wildfly/wildfly:31.0.1.Final-jdk17

EXPOSE 8080 9990

RUN /opt/jboss/wildfly/bin/add-user.sh -u admin -p admin

ADD --chown=jboss:jboss ./docker/resource/deployments /opt/jboss/wildfly/standalone/deployments/

CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0", "--debug"]
