#!/usr/bin/env python3
"""Build the six-page A4 Everclass ERP client brochure.

All copy remains selectable and editable in the PDF. Company, product and
contact identity areas are intentionally left blank for later completion.
"""

from pathlib import Path
import os

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
OUT = ROOT / "exports" / "School_ERP_Client_Brochure_A4_v2.pdf"

FONT_CANDIDATES = [
    Path(os.environ["SCHOOL_ERP_FONT_DIR"]) if os.environ.get("SCHOOL_ERP_FONT_DIR") else None,
    Path("/usr/share/fonts/truetype/noto"),
    Path(
        "/opt/codex/runtimes/codex-primary-runtime/dependencies/native/"
        "libreoffice-headless/libreoffice/share/fonts/truetype"
    ),
]

W, H = A4

GRAPHITE = HexColor("#18212B")
GREEN = HexColor("#1F6B52")
GREEN_DARK = HexColor("#185842")
GREEN_WASH = HexColor("#E3EFE9")
COBALT = HexColor("#1D5FA8")
INK_2 = HexColor("#4A5669")
MUTED = HexColor("#7C8796")
LINE = HexColor("#D9DFE2")
PAPER = HexColor("#F5F6F3")
SOFT = HexColor("#EEF2F1")
AMBER = HexColor("#A96A11")
AMBER_WASH = HexColor("#FFF3DC")


def register_fonts():
    font_dir = next(
        (candidate for candidate in FONT_CANDIDATES
         if candidate and (candidate / "NotoSans-Regular.ttf").exists()),
        None,
    )
    if font_dir is None:
        raise FileNotFoundError(
            "Noto Sans was not found. Set SCHOOL_ERP_FONT_DIR to a directory "
            "containing NotoSans-Regular.ttf, NotoSans-Bold.ttf and "
            "NotoSans-Italic.ttf."
        )
    pdfmetrics.registerFont(TTFont("Noto", font_dir / "NotoSans-Regular.ttf"))
    pdfmetrics.registerFont(TTFont("Noto-Bold", font_dir / "NotoSans-Bold.ttf"))
    pdfmetrics.registerFont(TTFont("Noto-Italic", font_dir / "NotoSans-Italic.ttf"))


def rounded(c, x, y, w, h, r=5 * mm, fill=white, stroke=None, sw=0.7):
    c.setLineWidth(sw)
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.roundRect(x, y, w, h, r, fill=1, stroke=1 if stroke else 0)


def text(c, value, x, y, size=10, color=GRAPHITE, font="Noto", align="left"):
    c.setFont(font, size)
    c.setFillColor(color)
    if align == "center":
        c.drawCentredString(x, y, value)
    elif align == "right":
        c.drawRightString(x, y, value)
    else:
        c.drawString(x, y, value)


def wrap_lines(value, font, size, max_width):
    words = value.split()
    lines, current = [], ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if pdfmetrics.stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def paragraph(c, value, x, y, max_width, size=10, leading=None,
              color=INK_2, font="Noto", max_lines=None):
    leading = leading or size * 1.38
    lines = wrap_lines(value, font, size, max_width)
    if max_lines:
        lines = lines[:max_lines]
    for line in lines:
        text(c, line, x, y, size, color, font)
        y -= leading
    return y


def image_cover(c, image_path, x, y, w, h):
    im = ImageReader(str(image_path))
    iw, ih = im.getSize()
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    dx, dy = x + (w - dw) / 2, y + (h - dh) / 2
    p = c.beginPath()
    p.rect(x, y, w, h)
    c.saveState()
    c.clipPath(p, stroke=0, fill=0)
    c.drawImage(im, dx, dy, dw, dh, mask="auto")
    c.restoreState()


def identity_space(c, dark=False):
    color = white if dark else GRAPHITE
    c.setStrokeColor(HexColor("#93A19D") if dark else LINE)
    c.setLineWidth(0.8)
    c.roundRect(16 * mm, H - 25 * mm, 42 * mm, 11 * mm, 3 * mm, fill=0, stroke=1)
    c.line(64 * mm, H - 20 * mm, 115 * mm, H - 20 * mm)
    c.setFillColor(color)


def footer(c, page, dark=False):
    color = HexColor("#D7E5DF") if dark else MUTED
    c.setStrokeColor(HexColor("#4C685D") if dark else LINE)
    c.setLineWidth(0.6)
    c.line(16 * mm, 13 * mm, W - 16 * mm, 13 * mm)
    text(c, "SCHOOL ERP • CLIENT DEMONSTRATION", 16 * mm, 7.5 * mm, 7.2, color, "Noto-Bold")
    text(c, f"{page} / 6", W - 16 * mm, 7.5 * mm, 7.2, color, "Noto-Bold", "right")


def eyebrow(c, value, x, y, dark=False):
    color = GREEN_WASH if dark else GREEN_DARK
    text(c, value.upper(), x, y, 8.3, color, "Noto-Bold")


def pill(c, label, x, y, w, fill=GREEN_WASH, ink=GREEN_DARK):
    rounded(c, x, y, w, 9 * mm, 4.5 * mm, fill)
    text(c, label, x + w / 2, y + 3.1 * mm, 8.4, ink, "Noto-Bold", "center")


def draw_icon(c, kind, cx, cy, s, color=GREEN):
    c.saveState()
    c.setStrokeColor(color)
    c.setFillColor(color)
    c.setLineWidth(max(1.2, s * 0.08))
    if kind == "school":
        c.line(cx - s * .55, cy - s * .15, cx, cy + s * .35)
        c.line(cx, cy + s * .35, cx + s * .55, cy - s * .15)
        c.rect(cx - s * .42, cy - s * .55, s * .84, s * .4, fill=0, stroke=1)
        c.rect(cx - s * .08, cy - s * .55, s * .16, s * .25, fill=0, stroke=1)
    elif kind == "people":
        for dx in (-.28, .28):
            c.circle(cx + dx * s, cy + .18 * s, .15 * s, fill=0, stroke=1)
            c.arc(cx + dx * s - .28 * s, cy - .48 * s, cx + dx * s + .28 * s, cy + .04 * s, 15, 150)
    elif kind == "check":
        c.circle(cx, cy, .55 * s, fill=0, stroke=1)
        c.line(cx - .25 * s, cy, cx - .05 * s, cy - .22 * s)
        c.line(cx - .05 * s, cy - .22 * s, cx + .33 * s, cy + .23 * s)
    elif kind == "calendar":
        c.roundRect(cx - .5 * s, cy - .45 * s, s, .85 * s, .08 * s, fill=0, stroke=1)
        c.line(cx - .5 * s, cy + .15 * s, cx + .5 * s, cy + .15 * s)
        c.line(cx - .25 * s, cy + .55 * s, cx - .25 * s, cy + .3 * s)
        c.line(cx + .25 * s, cy + .55 * s, cx + .25 * s, cy + .3 * s)
    elif kind == "chart":
        for i, h in enumerate((.35, .6, .9)):
            c.rect(cx - .48 * s + i * .34 * s, cy - .45 * s, .2 * s, h * s, fill=1, stroke=0)
    elif kind == "shield":
        p = c.beginPath()
        p.moveTo(cx, cy + .55 * s)
        p.lineTo(cx + .48 * s, cy + .32 * s)
        p.lineTo(cx + .35 * s, cy - .32 * s)
        p.lineTo(cx, cy - .58 * s)
        p.lineTo(cx - .35 * s, cy - .32 * s)
        p.lineTo(cx - .48 * s, cy + .32 * s)
        p.close()
        c.drawPath(p, fill=0, stroke=1)
    elif kind == "document":
        c.rect(cx - .4 * s, cy - .52 * s, .8 * s, 1.04 * s, fill=0, stroke=1)
        for dy in (.22, 0, -.22):
            c.line(cx - .24 * s, cy + dy * s, cx + .24 * s, cy + dy * s)
    elif kind == "message":
        c.roundRect(cx - .52 * s, cy - .32 * s, 1.04 * s, .72 * s, .1 * s, fill=0, stroke=1)
        c.line(cx - .22 * s, cy - .32 * s, cx - .4 * s, cy - .52 * s)
    elif kind == "upload":
        c.line(cx, cy - .5 * s, cx, cy + .35 * s)
        c.line(cx, cy + .35 * s, cx - .25 * s, cy + .1 * s)
        c.line(cx, cy + .35 * s, cx + .25 * s, cy + .1 * s)
        c.line(cx - .48 * s, cy - .5 * s, cx + .48 * s, cy - .5 * s)
    c.restoreState()


def page1(c):
    c.setFillColor(GRAPHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    identity_space(c, dark=True)
    eyebrow(c, "School management • simplified", 16 * mm, H - 40 * mm, dark=True)
    text(c, "One connected", 16 * mm, H - 58 * mm, 31, white, "Noto-Bold")
    text(c, "school record.", 16 * mm, H - 72 * mm, 31, white, "Noto-Bold")
    paragraph(c,
              "From applicant registration to the report card a guardian can view—keep daily school work connected, controlled and easier to explain.",
              16 * mm, H - 85 * mm, 174 * mm, 12, 16, HexColor("#D6DFDD"))

    image_cover(c, ASSETS / "hero.jpg", 0, 72 * mm, W, 118 * mm)
    c.setFillColor(GRAPHITE)
    c.rect(0, 72 * mm, 48 * mm, 118 * mm, fill=1, stroke=0)
    # a soft diagonal transition into the hero
    p = c.beginPath()
    p.moveTo(48 * mm, 72 * mm)
    p.lineTo(70 * mm, 72 * mm)
    p.lineTo(48 * mm, 190 * mm)
    p.close()
    c.drawPath(p, fill=1, stroke=0)

    rounded(c, 16 * mm, 33 * mm, W - 32 * mm, 29 * mm, 5 * mm, HexColor("#22303B"), HexColor("#3B5149"))
    pill(c, "ADMINISTRATOR", 22 * mm, 44 * mm, 50 * mm, GREEN, white)
    pill(c, "TEACHER", 78 * mm, 44 * mm, 45 * mm, HexColor("#2E5045"), white)
    pill(c, "GUARDIAN", 129 * mm, 44 * mm, 47 * mm, HexColor("#2E5045"), white)
    text(c, "Book a live workflow demonstration", 22 * mm, 37 * mm, 9.2, GREEN_WASH, "Noto-Bold")
    c.setStrokeColor(HexColor("#769287"))
    c.line(119 * mm, 37.3 * mm, 180 * mm, 37.3 * mm)
    footer(c, 1, dark=True)
    c.showPage()


def page2(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    identity_space(c)
    eyebrow(c, "Why connected records matter", 16 * mm, H - 40 * mm)
    text(c, "Move from scattered work", 16 * mm, H - 56 * mm, 25, GRAPHITE, "Noto-Bold")
    text(c, "to one operational flow.", 16 * mm, H - 68 * mm, 25, GRAPHITE, "Noto-Bold")
    paragraph(c, "The demo follows real school work—not a collection of isolated screens.",
              16 * mm, H - 80 * mm, 178 * mm, 10.5)

    x1, y0, cw = 16 * mm, 121 * mm, 81 * mm
    rounded(c, x1, y0, cw, 83 * mm, 6 * mm, white, LINE)
    text(c, "WHEN RECORDS ARE SEPARATE", x1 + 9 * mm, y0 + 71 * mm, 8.3, AMBER, "Noto-Bold")
    problems = [
        ("Duplicate entry", "The same student facts get typed again."),
        ("Unclear status", "Missing work can look like completed work."),
        ("Slow answers", "Staff search across sheets and messages."),
    ]
    py = y0 + 56 * mm
    for title, desc in problems:
        c.setFillColor(AMBER_WASH)
        c.circle(x1 + 12 * mm, py + 1.5 * mm, 4 * mm, fill=1, stroke=0)
        text(c, "!", x1 + 12 * mm, py - .6 * mm, 10, AMBER, "Noto-Bold", "center")
        text(c, title, x1 + 21 * mm, py + 3.5 * mm, 10, GRAPHITE, "Noto-Bold")
        paragraph(c, desc, x1 + 21 * mm, py - 2.2 * mm, 50 * mm, 8.4, 10.5, INK_2)
        py -= 20 * mm

    x2 = 113 * mm
    rounded(c, x2, y0, 81 * mm, 83 * mm, 6 * mm, GREEN_DARK)
    text(c, "WITH A CONNECTED FLOW", x2 + 9 * mm, y0 + 71 * mm, 8.3, GREEN_WASH, "Noto-Bold")
    flow = [
        ("1", "Capture once", "Start with the applicant and family."),
        ("2", "Carry context", "Placement drives daily academic work."),
        ("3", "Release with control", "Publish only approved information."),
    ]
    py = y0 + 56 * mm
    for number, title, desc in flow:
        c.setFillColor(GREEN_WASH)
        c.circle(x2 + 12 * mm, py + 1.5 * mm, 4 * mm, fill=1, stroke=0)
        text(c, number, x2 + 12 * mm, py - .6 * mm, 9, GREEN_DARK, "Noto-Bold", "center")
        text(c, title, x2 + 21 * mm, py + 3.5 * mm, 10, white, "Noto-Bold")
        paragraph(c, desc, x2 + 21 * mm, py - 2.2 * mm, 50 * mm, 8.4, 10.5, HexColor("#DDEBE6"))
        py -= 20 * mm

    # outcome band
    rounded(c, 16 * mm, 45 * mm, 178 * mm, 61 * mm, 6 * mm, white, LINE)
    text(c, "CURRENT DEMONSTRATION", 25 * mm, 92 * mm, 8.3, GREEN_DARK, "Noto-Bold")
    stats = [("12", "documented product areas"), ("3", "role-based experiences"), ("1", "connected student journey")]
    for i, (value, label) in enumerate(stats):
        sx = 25 * mm + i * 56 * mm
        if i:
            c.setStrokeColor(LINE)
            c.line(sx - 8 * mm, 54 * mm, sx - 8 * mm, 88 * mm)
        text(c, value, sx, 70 * mm, 26, GREEN, "Noto-Bold")
        paragraph(c, label, sx, 62 * mm, 43 * mm, 8.8, 11, INK_2)
    text(c, "School-specific policy, formats and delivery requirements are confirmed during assessment.",
         25 * mm, 51 * mm, 7.6, MUTED, "Noto-Italic")
    footer(c, 2)
    c.showPage()


def page3(c):
    c.setFillColor(white)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    identity_space(c)
    eyebrow(c, "Student journey", 16 * mm, H - 40 * mm)
    text(c, "One record. Six visible steps.", 16 * mm, H - 57 * mm, 25, GRAPHITE, "Noto-Bold")
    paragraph(c, "Show clients how information moves—and where a human decision is required.",
              16 * mm, H - 69 * mm, 178 * mm, 10.5)

    steps = [
        ("01", "Register applicant", "Record the application and guardian relationships.", "people"),
        ("02", "Decide admission", "Accept or reject explicitly; nothing changes silently.", "check"),
        ("03", "Enrol student", "Assign academic year, class, section and roll context.", "school"),
        ("04", "Record school work", "Attendance and marks follow the eligible roster.", "calendar"),
        ("05", "Review & publish", "Finalize results and release a frozen report snapshot.", "document"),
        ("06", "Family access", "Guardian sees only the linked child’s released records.", "shield"),
    ]
    card_w, card_h = 54 * mm, 52 * mm
    xs = [16 * mm, 78 * mm, 140 * mm]
    ys = [157 * mm, 91 * mm]
    for i, (num, title_, desc, icon) in enumerate(steps):
        row, col = divmod(i, 3)
        x, y = xs[col], ys[row]
        rounded(c, x, y, card_w, card_h, 5 * mm, PAPER, LINE)
        c.setFillColor(GREEN if row == 0 else COBALT)
        c.circle(x + 8 * mm, y + card_h - 8 * mm, 4.5 * mm, fill=1, stroke=0)
        text(c, num, x + 8 * mm, y + card_h - 10.2 * mm, 7.4, white, "Noto-Bold", "center")
        draw_icon(c, icon, x + 43 * mm, y + card_h - 10 * mm, 7 * mm, GREEN if row == 0 else COBALT)
        text(c, title_, x + 7 * mm, y + 28 * mm, 10.2, GRAPHITE, "Noto-Bold")
        paragraph(c, desc, x + 7 * mm, y + 21 * mm, 40 * mm, 8.2, 10.2, INK_2)
        if i < 5:
            # restrained connector showing the reading order
            if col < 2:
                ax1, ay1, ax2, ay2 = x + card_w + 2 * mm, y + card_h / 2, xs[col + 1] - 2 * mm, y + card_h / 2
            elif row == 0:
                ax1, ay1, ax2, ay2 = x + card_w / 2, y - 3 * mm, xs[0] + card_w / 2, ys[1] + card_h + 3 * mm
            else:
                ax1, ay1, ax2, ay2 = x + card_w + 2 * mm, y + card_h / 2, xs[col + 1] - 2 * mm, y + card_h / 2
            c.setStrokeColor(HexColor("#9DB5AC"))
            c.setLineWidth(1)
            c.line(ax1, ay1, ax2, ay2)

    rounded(c, 16 * mm, 39 * mm, 178 * mm, 37 * mm, 5 * mm, GREEN_WASH)
    text(c, "DEMO PROMPT", 24 * mm, 64 * mm, 8.3, GREEN_DARK, "Noto-Bold")
    text(c, "“Who decides, who records, and who is allowed to see the result?”", 24 * mm, 52 * mm, 13, GRAPHITE, "Noto-Bold")
    text(c, "Use this question at every step to uncover the school’s real requirements.", 24 * mm, 44 * mm, 8.6, INK_2)
    footer(c, 3)
    c.showPage()


def page4(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    identity_space(c)
    eyebrow(c, "Role-based experience", 16 * mm, H - 40 * mm)
    text(c, "Three views. One controlled record.", 16 * mm, H - 57 * mm, 24, GRAPHITE, "Noto-Bold")
    paragraph(c, "Each person sees the work relevant to their role, assignment and approved relationship.",
              16 * mm, H - 69 * mm, 178 * mm, 10.5)

    cards = [
        ("ADMINISTRATOR", "Runs the school workflow", "school", GREEN_DARK,
         ["Configure school and academic structure", "Review admissions and student records", "Publish reports and manage accounts"]),
        ("TEACHER", "Records assigned academic work", "document", COBALT,
         ["View assigned classes and students", "Submit attendance for eligible dates", "Enter marks and class remarks"]),
        ("GUARDIAN", "Views approved child information", "people", HexColor("#6B4E2E"),
         ["See linked child attendance", "Open published report cards", "Read relevant school notices"]),
    ]
    xs = [16 * mm, 77.5 * mm, 139 * mm]
    for i, (role, subtitle, icon, accent, bullets) in enumerate(cards):
        x, y, cw, ch = xs[i], 100 * mm, 55 * mm, 104 * mm
        rounded(c, x, y, cw, ch, 6 * mm, white, LINE)
        c.setFillColor(accent)
        c.roundRect(x, y + ch - 29 * mm, cw, 29 * mm, 6 * mm, fill=1, stroke=0)
        c.rect(x, y + ch - 29 * mm, cw, 6 * mm, fill=1, stroke=0)
        draw_icon(c, icon, x + 10 * mm, y + ch - 14 * mm, 7 * mm, white)
        text(c, role, x + 20 * mm, y + ch - 12 * mm, 8.1, white, "Noto-Bold")
        paragraph(c, subtitle, x + 7 * mm, y + ch - 39 * mm, 41 * mm, 9.3, 12, GRAPHITE, "Noto-Bold")
        by = y + ch - 58 * mm
        for bullet in bullets:
            c.setFillColor(accent)
            c.circle(x + 9 * mm, by + 1.5 * mm, 1.4 * mm, fill=1, stroke=0)
            paragraph(c, bullet, x + 14 * mm, by + 3.2 * mm, 34 * mm, 8, 10.2, INK_2)
            by -= 18 * mm

    rounded(c, 16 * mm, 41 * mm, 178 * mm, 44 * mm, 6 * mm, GRAPHITE)
    text(c, "ACCESS FOLLOWS CONTEXT", 25 * mm, 72 * mm, 8.3, GREEN_WASH, "Noto-Bold")
    controls = [("Role", "Administrator, teacher or guardian"), ("Assignment", "Class, subject and academic year"), ("Relationship", "Explicit child access grant")]
    for i, (title_, desc) in enumerate(controls):
        xx = 25 * mm + i * 55 * mm
        if i:
            c.setStrokeColor(HexColor("#4E6069"))
            c.line(xx - 7 * mm, 50 * mm, xx - 7 * mm, 70 * mm)
        text(c, title_, xx, 61 * mm, 10.4, white, "Noto-Bold")
        paragraph(c, desc, xx, 54 * mm, 42 * mm, 7.8, 9.6, HexColor("#CFD8DB"))
    footer(c, 4)
    c.showPage()


def page5(c):
    c.setFillColor(white)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    identity_space(c)
    eyebrow(c, "Current demonstration catalogue", 16 * mm, H - 40 * mm)
    text(c, "12 connected product areas.", 16 * mm, H - 57 * mm, 25, GRAPHITE, "Noto-Bold")
    paragraph(c, "A practical baseline for requirements discovery—not a promise that every requested module is already included.",
              16 * mm, H - 69 * mm, 178 * mm, 10.3)

    modules = [
        ("01", "Dashboard & school setup", "school"),
        ("02", "Academic structure & calendar", "calendar"),
        ("03", "Admissions & student records", "people"),
        ("04", "Teacher accounts & assignments", "people"),
        ("05", "Attendance management", "check"),
        ("06", "Assessments & report cards", "chart"),
        ("07", "Timetable management", "calendar"),
        ("08", "Guardian portal & family access", "shield"),
        ("09", "Announcements & communication", "message"),
        ("10", "School documents", "document"),
        ("11", "Excel import & onboarding", "upload"),
        ("12", "Access control & audit", "shield"),
    ]
    start_y = 194 * mm
    card_w, card_h = 84 * mm, 24 * mm
    for i, (num, name, icon) in enumerate(modules):
        row, col = divmod(i, 2)
        x = 16 * mm + col * 94 * mm
        y = start_y - row * 28 * mm
        fill = PAPER if row % 2 == 0 else SOFT
        rounded(c, x, y, card_w, card_h, 4 * mm, fill, LINE)
        c.setFillColor(GREEN if col == 0 else COBALT)
        c.circle(x + 10 * mm, y + card_h / 2, 5.5 * mm, fill=1, stroke=0)
        text(c, num, x + 10 * mm, y + card_h / 2 - 2.5 * mm, 7.8, white, "Noto-Bold", "center")
        draw_icon(c, icon, x + 24 * mm, y + card_h / 2, 6 * mm, GREEN_DARK if col == 0 else COBALT)
        paragraph(c, name, x + 34 * mm, y + 14.5 * mm, 43 * mm, 8.8, 10.8, GRAPHITE, "Noto-Bold")

    rounded(c, 16 * mm, 24 * mm, 178 * mm, 25 * mm, 5 * mm, GREEN_WASH)
    text(c, "ONLINE INSTALLABLE PWA", 24 * mm, 39 * mm, 8.1, GREEN_DARK, "Noto-Bold")
    text(c, "Supported devices can install the current web app; offline work, background sync and push are not included.",
         24 * mm, 31.5 * mm, 7.8, INK_2)
    footer(c, 5)
    c.showPage()


def page6(c):
    c.setFillColor(GRAPHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    identity_space(c, dark=True)
    eyebrow(c, "From demo to school launch", 16 * mm, H - 40 * mm, dark=True)
    text(c, "Start with the workflow.", 16 * mm, H - 57 * mm, 25, white, "Noto-Bold")
    text(c, "Scope the school-specific fit.", 16 * mm, H - 69 * mm, 25, white, "Noto-Bold")

    steps = ["Discover", "Agree scope", "Configure", "Import & train", "School acceptance", "Launch & support"]
    y = 200 * mm
    for i, label in enumerate(steps):
        x = 16 * mm + (i % 3) * 61 * mm
        yy = y - (i // 3) * 31 * mm
        rounded(c, x, yy, 55 * mm, 22 * mm, 4 * mm, HexColor("#22313A"), HexColor("#486159"))
        c.setFillColor(GREEN)
        c.circle(x + 9 * mm, yy + 11 * mm, 5 * mm, fill=1, stroke=0)
        text(c, str(i + 1), x + 9 * mm, yy + 8.3 * mm, 8, white, "Noto-Bold", "center")
        paragraph(c, label, x + 17 * mm, yy + 13.5 * mm, 32 * mm, 8.3, 10, white, "Noto-Bold")

    rounded(c, 16 * mm, 74 * mm, 84 * mm, 75 * mm, 6 * mm, white)
    text(c, "COMMERCIAL APPROACH", 25 * mm, 136 * mm, 8.2, GREEN_DARK, "Noto-Bold")
    text(c, "Custom installation", 25 * mm, 124 * mm, 13, GRAPHITE, "Noto-Bold")
    paragraph(c, "School setup, approved configuration, data preparation and training are scoped before the proposal.",
              25 * mm, 115 * mm, 65 * mm, 8.4, 11, INK_2)
    c.setStrokeColor(LINE)
    c.line(25 * mm, 94 * mm, 90 * mm, 94 * mm)
    text(c, "Setup fee + annual support", 25 * mm, 84 * mm, 9.2, GREEN_DARK, "Noto-Bold")

    rounded(c, 110 * mm, 74 * mm, 84 * mm, 75 * mm, 6 * mm, HexColor("#24343D"), HexColor("#4B6159"))
    text(c, "SEPARATELY ASSESSED", 119 * mm, 136 * mm, 8.2, HexColor("#BFD6CD"), "Noto-Bold")
    boundaries = [
        "Fees and online payments",
        "Automatic messaging integrations",
        "Native mobile or offline workflows",
        "Transport, library, hostel, payroll or inventory",
        "Multi-school SaaS and external integrations",
    ]
    by = 124 * mm
    for item in boundaries:
        c.setFillColor(COBALT)
        c.circle(119 * mm, by + 1.2 * mm, 1.2 * mm, fill=1, stroke=0)
        paragraph(c, item, 124 * mm, by + 3 * mm, 60 * mm, 7.6, 9.5, HexColor("#E0E6E8"))
        by -= 10.5 * mm

    rounded(c, 16 * mm, 26 * mm, 178 * mm, 34 * mm, 6 * mm, GREEN_DARK)
    text(c, "BOOK A LIVE DEMONSTRATION", 25 * mm, 47 * mm, 9.2, white, "Noto-Bold")
    # Deliberately empty lines for company/product/contact details.
    c.setStrokeColor(HexColor("#8EB5A6"))
    for x1, x2, yy in [
        (25 * mm, 86 * mm, 37 * mm),
        (96 * mm, 141 * mm, 37 * mm),
        (150 * mm, 185 * mm, 37 * mm),
    ]:
        c.line(x1, yy, x2, yy)
    footer(c, 6, dark=True)
    c.showPage()


def build():
    register_fonts()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle("Everclass ERP Client Brochure — A4")
    c.setSubject("Six-page client brochure for an Everclass ERP demonstration")
    c.setAuthor("")
    for page in (page1, page2, page3, page4, page5, page6):
        page(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
