site=ARGV[0]
deploy_var="DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy #{site} --settings settings.json"
puts site
system(site)
