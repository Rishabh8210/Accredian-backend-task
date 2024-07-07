-- CreateTable
CREATE TABLE `User` (
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `wallet` DOUBLE NOT NULL DEFAULT 0.0,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invitation` (
    `invitationId` VARCHAR(191) NOT NULL,
    `status` ENUM('Pending', 'Approved', 'Rejected') NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`invitationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Course` (
    `courseId` VARCHAR(191) NOT NULL,
    `courseName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL DEFAULT 0.0,

    PRIMARY KEY (`courseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Invitation` ADD CONSTRAINT `Invitation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invitation` ADD CONSTRAINT `Invitation_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;
