FROM centos:7
MAINTAINER abazure-jp<say.0213@gmail.com>

RUN yum update -y
RUN yum install -y epel-release
RUN rpm -ivh http://repo.okay.com.mx/centos/7/x86_64/release/okay-release-1-1.noarch.rpm
RUN yum install -y phantomjs.x86_64
RUN yum install -y ibus-kkc vlgothic-*
RUN yum groupinstall -y "Japanese Support"

EXPOSE 22
EXPOSE 80
CMD ["/sbin/init"]
