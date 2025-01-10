import sys
import os

# Add the path to the project and virtual environment to the system path
sys.path.append('/home/ndominguez2019/resume-app')
sys.path.append('/home/ndominguez2019/resume-app/blog')

# Set the DJANGO_SETTINGS_MODULE environment variable to your project's settings
os.environ['DJANGO_SETTINGS_MODULE'] = 'blog.settings'

# Directly add site-packages to sys.path for the virtual environment
site_packages = '/home/ndominguez2019/resume-app/blog_env/lib/python3.8/site-packages'
sys.path.append(site_packages)

# Import Django's WSGI application handler
from django.core.wsgi import get_wsgi_application

# Get the application for mod_wsgi to run
application = get_wsgi_application()
