from flask.cli import AppGroup
from .users import seed_users, undo_users
from .businesses import seeded_businesses, undo_businesses
from .reviews import seeded_reviews, undo_reviews
from .menuitems import seeded_menuitems, undo_menuitems
from .likes import seeded_likes, undo_likes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seeded_businesses()
    seeded_reviews()
    seeded_menuitems()
    seeded_likes()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_reviews()
    undo_menuitems()
    undo_businesses()
    undo_users()
    undo_likes()
    # Add other undo functions here
