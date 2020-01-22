import datetime


def get_utc_datetime():
    """ Get the current UTC time """
    return datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc)


def strip_timezome(date: datetime.datetime) -> datetime.datetime:
    """ Remove timezone from a datetime """
    return date.replace(tzinfo=None)


def add_utc_timezone(date: datetime.datetime) -> datetime.datetime:
    """ Add a utc timezone to a datetime """
    return date.replace(tzinfo=datetime.timezone.utc)


def datetime_to_iso_string(date: datetime.datetime) -> str:
    """ Convert a datetime to an ISO 8601 string that is safe to pass to JavaScript """
    return date.isoformat()


def iso_string_to_datetime(string: str) -> datetime.datetime:
    """ Convert an ISO string (passed from a JavaScript client) to a datetime """
    return datetime.datetime.strptime(string, "%Y-%m-%dT%H:%M:%S.%f%z")
